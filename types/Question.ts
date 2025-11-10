export type Question = TextQuestion | MultipleChoiceQuestion;

type TextQuestion = {
    question: string;
    answer: string;
}

type MultipleChoiceQuestion = {
    question: string;
    answers: { [key: number]: string };
    correct: { [key: number]: 0 | 1 };
}