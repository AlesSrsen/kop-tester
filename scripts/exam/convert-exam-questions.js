#!/usr/bin/env node
/**
 * Script to convert exam-questions.json to the format used in questions.js
 * 
 * Source format (exam-questions.json):
 * - data.formative.items[] containing question objects
 * - Each question has: text, details.choiceLabels, details.choices, details.correctAnswers
 * 
 * Target format (questions.js):
 * - questions.push({ question: "...", answers: {1: "...", 2: "..."}, correct: {1: 0, 2: 1} })
 */

const fs = require('fs');
const path = require('path');

// Read the source JSON file
const sourceFile = path.join(__dirname, 'exam-questions.json');
const outputFile = path.join(__dirname, 'exam-questions-converted.js');

const rawData = fs.readFileSync(sourceFile, 'utf8');
const data = JSON.parse(rawData);

// Extract items from the formative data
const items = data.data.formative.items;

// Filter only question items (type === 'question')
const questions = items.filter(item => item.type === 'question');

// Build the output
let output = '// Auto-generated from exam-questions.json\n';
output += '// Total questions: ' + questions.length + '\n\n';
output += 'var examQuestions = [];\n\n';

questions.forEach((q, index) => {
    const questionNumber = q.questionNumber || (index + 1);
    const questionText = q.text || '';
    const choiceLabels = q.details?.choiceLabels || [];
    const choices = q.details?.choices || [];
    const correctAnswers = q.details?.correctAnswers || [];

    // Skip if no choices (not a valid multiple choice question)
    if (choices.length === 0 || choiceLabels.length === 0) {
        console.log(`Skipping question ${questionNumber}: no choices`);
        return;
    }

    // Build answers object: {1: "label1", 2: "label2", ...}
    const answersObj = {};
    choices.forEach((choice, i) => {
        if (i < choiceLabels.length) {
            // Clean up the label - handle JSON-encoded rich text
            let label = choiceLabels[i];

            // Try to parse JSON-encoded content (Draft.js format)
            if (label && label.startsWith('{') && label.includes('"blocks"')) {
                try {
                    const parsed = JSON.parse(label);
                    if (parsed.blocks && Array.isArray(parsed.blocks)) {
                        label = parsed.blocks.map(b => b.text).join(' ').trim();
                    }
                } catch (e) {
                    // Keep original if parsing fails
                }
            }

            answersObj[i + 1] = label;
        }
    });

    // Build correct object: {1: 0, 2: 1, ...} where 1 means correct
    const correctObj = {};
    choices.forEach((choice, i) => {
        const isCorrect = correctAnswers.includes(choice) ? 1 : 0;
        correctObj[i + 1] = isCorrect;
    });

    // Generate the JavaScript code
    output += 'examQuestions.push({\n';
    output += `    question: ${JSON.stringify(questionText)},\n`;
    output += '    answers: {\n';
    Object.entries(answersObj).forEach(([key, value], i, arr) => {
        const comma = i < arr.length - 1 ? ',' : '';
        output += `        ${key}: ${JSON.stringify(value)}${comma}\n`;
    });
    output += '    },\n';
    output += '    correct: {';
    output += Object.entries(correctObj).map(([k, v]) => `${k}: ${v}`).join(', ');
    output += '}\n';
    output += '});\n';
});

// Write the output file
fs.writeFileSync(outputFile, output);

console.log(`Converted ${questions.length} questions`);
console.log(`Output written to: ${outputFile}`);
