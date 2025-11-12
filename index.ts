import { paa_test_2020_verze_26_11_16_15 } from "./questions/paa_test_2020_verze_26_11_16_15"
import { MultipleChoiceQuestion, Question, TextQuestion } from "./types/Question"

export const questions: Question[] = []

paa_test_2020_verze_26_11_16_15.forEach(
    q => questions.push(q)
)

if (typeof questions === 'undefined' || !Array.isArray(questions)) {
    document.getElementById('questions-output')!.innerHTML =
        '<p style="color: red;">Chyba: Soubor questions.js se nenačetl správně nebo neobsahuje pole questions.</p>';
} else {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
}

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeQuiz(): void {
    const outputDiv = document.getElementById('questions-output')!;
    outputDiv.innerHTML = '';
    const shuffledQuestions = shuffleArray(questions);
    let allGeneratedHtml: string = '';

    shuffledQuestions.forEach((q: Question, index: number): void => {
        const originalIndex: number = questions.indexOf(q);
        let qCardHtml: string = `<div class="question-card" id="q-${originalIndex}">`;
        qCardHtml += `<h3>${index + 1}. ${q.question}</h3>`;

        if (q.answers && q.correct) {
            qCardHtml += generateMCContent(q, originalIndex);
        } else if (q.answer) {
            qCardHtml += generateOpenContent(q, originalIndex);
        }

        if (q.note) {
            qCardHtml += `<div class="note">Poznámka: ${q.note}</div>`;
        }

        qCardHtml += `<div id="result-${originalIndex}"></div>`;
        qCardHtml += `<button class="check-button" onclick="checkAnswer(${originalIndex})">Zkontrolovat odpověď</button>`;
        qCardHtml += `</div>`;
        allGeneratedHtml += qCardHtml;
    });

    outputDiv.innerHTML = allGeneratedHtml;

    // 💡 MathJax musí přerenderovat až po vložení otázek
    if ((window as any).MathJax) (window as any).MathJax.typesetPromise();
}

function generateMCContent(q: MultipleChoiceQuestion, index: number): string {
    let html: string = '<div class="answers-mc">';
    const answerKeys: string[] = shuffleArray(Object.keys(q.answers));
    answerKeys.forEach((key: string): void => {
        const answerText: string = q.answers[key];
        html += `
                    <label id="label-${index}-${key}">
                        <input type="checkbox" name="q-${index}" value="${key}" id="q-${index}-ans-${key}">
                        ${answerText}
                    </label>
                `;
    });
    html += '</div>';
    return html;
}

function generateOpenContent(q: TextQuestion, index: number): string {
    return `
                <textarea id="q-${index}-input" class="open-answer-input" rows="3" placeholder="Zde napište vaši odpověď..."></textarea>
            `;
}

function checkAnswer(index: number): void {
    const q: Question = questions[index];
    const resultDiv: HTMLElement = document.getElementById(`result-${index}`)!;
    resultDiv.innerHTML = '';

    if (q.answers && q.correct) {
        checkMC(q as MultipleChoiceQuestion, index, resultDiv);
    } else if (q.answer) {
        checkOpen(q as TextQuestion, index, resultDiv);
    }

    if ((window as any).MathJax) {
        const qCard: HTMLElement | null = document.getElementById(`q-${index}`);
        (window as any).MathJax.typesetPromise([qCard]);
    }
}

function checkMC(q: MultipleChoiceQuestion, index: number, resultDiv: HTMLElement): void {
    let isCorrect: boolean = true;
    const correctAnswers: string[] = [];
    const incorrectSelections: string[] = [];
    const missedCorrect: string[] = [];

    Object.keys(q.answers).forEach((key: string): void => {
        const inputElement: HTMLInputElement | null = document.getElementById(`q-${index}-ans-${key}`) as HTMLInputElement;
        const labelElement: HTMLElement | null = document.getElementById(`label-${index}-${key}`);
        if (!inputElement || !labelElement) return;

        const isChecked: boolean = inputElement.checked;
        const shouldBeChecked: boolean = q.correct[key] === 1;

        labelElement.classList.remove('mc-correct-option', 'mc-incorrect-option');
        if (shouldBeChecked) correctAnswers.push(q.answers[key]);

        if (isChecked && shouldBeChecked) {
            labelElement.classList.add('mc-correct-option');
        } else if (isChecked && !shouldBeChecked) {
            isCorrect = false;
            incorrectSelections.push(q.answers[key]);
            labelElement.classList.add('mc-incorrect-option');
        } else if (!isChecked && shouldBeChecked) {
            isCorrect = false;
            missedCorrect.push(q.answers[key]);
            labelElement.classList.add('mc-correct-option');
        }
    });

    if (isCorrect) {
        resultDiv.className = 'result-mc correct';
        resultDiv.innerHTML = '✅ <strong>Správně!</strong>';
    } else {
        resultDiv.className = 'result-mc incorrect';
        resultDiv.innerHTML = '❌ <strong>Špatně.</strong> Zkontrolujte zvýrazněné možnosti.';
        let feedbackHTML: string = '<div class="correct-answer-mc">';
        if (missedCorrect.length > 0)
            feedbackHTML += `<p><strong>Chybějící správné odpovědi:</strong> ${missedCorrect.join(', ')}</p>`;
        if (incorrectSelections.length > 0)
            feedbackHTML += `<p><strong>Nesprávně zvolené odpovědi:</strong> ${incorrectSelections.join(', ')}</p>`;
        feedbackHTML += `<p><strong>Všechny správné možnosti byly:</strong> ${correctAnswers.map(ans => `<em>${ans}</em>`).join(', ')}</p>`;
        feedbackHTML += '</div>';
        resultDiv.innerHTML += feedbackHTML;
    }
}

function checkOpen(q: TextQuestion, index: number, resultDiv: HTMLElement): void {
    const inputElement: HTMLTextAreaElement | null = document.getElementById(`q-${index}-input`) as HTMLTextAreaElement;
    resultDiv.className = 'open-answer-result';
    resultDiv.innerHTML = `
                <p><strong>Vaše odpověď:</strong> ${inputElement?.value || '*(Nezadáno)*'}</p>
                <hr style="border-top: 1px solid #ffeeba;">
                <p><strong>Správná odpověď:</strong> ${q.answer}</p>
            `;
}

(window as any).checkAnswer = checkAnswer;