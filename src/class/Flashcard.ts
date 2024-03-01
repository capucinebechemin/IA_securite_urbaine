import { QuestionEnum } from "./QuestionEnum";

export class Flashcard {
    id: string;
    title: string;
    type = QuestionEnum.Flashcard;
    question: string;
    answers: FlashcardAnswer[];

    constructor(id: string, title: string, question: string, answers: FlashcardAnswer[]) {
        this.id = id;
        this.title = title;
        this.question = question;
        this.answers = answers;
    }
    static fromJSON(jsonData: any): Flashcard {
        const { id, title, question, answers } = jsonData;
        return new Flashcard(id, title, question, answers);
    }
}

export interface FlashcardAnswer {
    answer: string;
    img: string;
}