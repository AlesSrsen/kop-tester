#!/usr/bin/env node
/**
 * Exam Questions Converter
 * 
 * Converts exam-questions.json to exam-questions-converted.js format
 * and downloads images to assets/exam/ folder.
 * 
 * Usage: node convert-questions.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const INPUT_FILE = path.join(__dirname, 'exam-questions.json');
const OUTPUT_FILE = path.join(__dirname, 'exam-questions-converted.js');
const ASSETS_DIR = path.join(__dirname, '..', '..', 'assets', 'exam');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

/**
 * Download a file from URL
 */
function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // Handle redirect
                downloadFile(response.headers.location, destPath)
                    .then(resolve)
                    .catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(destPath);
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => { }); // Delete the file on error
            reject(err);
        });
    });
}

/**
 * Extract filename from URL
 */
function getFilenameFromUrl(url) {
    const parts = url.split('/');
    return parts[parts.length - 1];
}

/**
 * Parse JSON string from choiceLabel if it's a complex format
 */
function parseChoiceLabel(label) {
    if (!label) return '';

    // Check if it's a JSON string (starts with {)
    if (label.startsWith('{')) {
        try {
            const parsed = JSON.parse(label);
            if (parsed.blocks && Array.isArray(parsed.blocks)) {
                // Extract text from blocks
                return parsed.blocks
                    .map(block => block.text)
                    .filter(text => text && text.trim())
                    .join(' ');
            }
        } catch (e) {
            // Not valid JSON, return as-is
        }
    }

    // Clean up tab characters and extra whitespace
    return label.replace(/\\t/g, ' ').replace(/\t/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Convert multipleSelection question to target format
 */
function convertMultipleSelection(item, imageUrl = null) {
    const question = {
        question: parseChoiceLabel(item.text || '')
    };

    if (imageUrl) {
        question.image = imageUrl;
    }

    const details = item.details;
    if (!details.choiceLabels || !details.choices || !details.correctAnswers) {
        console.warn(`Warning: Question ${item._id} missing required fields`);
        return null;
    }

    // Build answers object
    const answers = {};
    const correct = {};

    details.choiceLabels.forEach((label, index) => {
        const answerKey = index + 1;
        answers[answerKey] = parseChoiceLabel(label);

        // Check if this choice is in correctAnswers
        const choiceId = details.choices[index];
        const isCorrect = details.correctAnswers.includes(choiceId) ? 1 : 0;
        correct[answerKey] = isCorrect;
    });

    question.answers = answers;
    question.correct = correct;

    return question;
}

/**
 * Convert trueOrFalse question to target format (selection question)
 */
function convertTrueOrFalse(item) {
    const details = item.details;

    // Build answers object - True/False choices
    const answers = {
        1: "Áno (True)",
        2: "Nie (False)"
    };

    // Determine correct answers from the choices array
    const correct = { 1: 0, 2: 0 };

    if (details.choices && details.correctAnswers) {
        // Map choices to answer keys
        details.choices.forEach((choice, index) => {
            const answerKey = index + 1;
            if (details.correctAnswers.includes(choice)) {
                correct[answerKey] = 1;
            }
        });
    } else {
        // If no correct answers in data, default to self-evaluation
        return {
            question: parseChoiceLabel(item.text || ''),
            answer: "Vyhodnoťte sami: Ano / Ne (správna odpoveď nie je v systéme uložená)"
        };
    }

    return {
        question: parseChoiceLabel(item.text || ''),
        answers: answers,
        correct: correct
    };
}

/**
 * Main conversion function
 */
async function convert() {
    console.log('Reading input file...');
    const inputData = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));
    const items = inputData.data.formative.items;

    console.log(`Found ${items.length} items`);

    // First pass: identify functionalizedImage items and download images
    const imageMap = {}; // Map from item ID to local image path
    const functionalizedImageItems = items.filter(item => item.type === 'functionalized' && item.subtype === 'functionalizedImage');

    console.log(`Found ${functionalizedImageItems.length} functionalizedImage items`);

    for (const item of functionalizedImageItems) {
        if (item.details && item.details.src) {
            const url = item.details.src;
            const filename = getFilenameFromUrl(url);
            const localPath = path.join(ASSETS_DIR, filename);
            const relativePath = `assets/exam/${filename}`;

            console.log(`Downloading ${filename}...`);
            try {
                await downloadFile(url, localPath);
                imageMap[item._id] = relativePath;
                console.log(`  Saved to ${relativePath}`);
            } catch (err) {
                console.error(`  Error downloading ${url}: ${err.message}`);
            }
        }
    }

    // Second pass: convert questions
    const convertedQuestions = [];

    for (const item of items) {
        if (item.type === 'functionalized') {
            // Skip functionalized items, they're just image containers
            continue;
        }

        let question = null;

        // Determine image URL for this question
        let imageUrl = null;
        if (item.parentId && imageMap[item.parentId]) {
            imageUrl = imageMap[item.parentId];
        }

        switch (item.subtype) {
            case 'multipleSelection':
                question = convertMultipleSelection(item, imageUrl);
                break;

            case 'trueOrFalse':
                question = convertTrueOrFalse(item);
                break;

            default:
                console.warn(`Unknown subtype: ${item.subtype} for item ${item._id}`);
        }

        if (question) {
            convertedQuestions.push(question);
        }
    }

    console.log(`\nConverted ${convertedQuestions.length} questions`);

    // Generate output JavaScript
    let output = '// Auto-generated from exam-questions.json\n';
    output += '// Generated on: ' + new Date().toISOString() + '\n\n';
    output += 'var examQuestions = [];\n\n';

    for (const q of convertedQuestions) {
        output += 'examQuestions.push(' + JSON.stringify(q, null, 4) + ');\n\n';
    }

    fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
    console.log(`\nOutput written to ${OUTPUT_FILE}`);

    // Print summary
    const multipleCount = convertedQuestions.filter(q => q.answers).length;
    const trueOrFalseCount = convertedQuestions.filter(q => q.answer && !q.answers).length;
    const withImageCount = convertedQuestions.filter(q => q.image).length;

    console.log('\n=== Summary ===');
    console.log(`Total questions: ${convertedQuestions.length}`);
    console.log(`  Multiple selection: ${multipleCount}`);
    console.log(`  True/False (self-eval): ${trueOrFalseCount}`);
    console.log(`  With images: ${withImageCount}`);
}

convert().catch(err => {
    console.error('Error during conversion:', err);
    process.exit(1);
});
