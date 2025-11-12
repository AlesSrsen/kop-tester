export type Question = TextQuestion | MultipleChoiceQuestion

type QuestionNote = {
    note: string;
}

export type TextQuestion = {
    question: string;
    answer: string;
} & Partial<QuestionNote>;

export type MultipleChoiceQuestion = {
    question: string;
    answers: { [key: number]: string };
    correct: { [key: number]: 0 | 1 };
} & Partial<QuestionNote>;
