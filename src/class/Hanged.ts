import { QuestionEnum } from "./QuestionEnum";

export class Hanged {
    id: string;
    title: string;
    type = QuestionEnum.Hanged;
    start_question: string;
    end_question: string;
    word: string;
    textAnswer: string;

    constructor(id: string, title: string, start_question: string, end_question: string, word: string, textAnswer: string) {
        this.id = id;
        this.title = title;
        this.start_question = start_question;
        this.end_question = end_question;
        this.word = word;
        this.textAnswer = textAnswer;
    }

    static fromJSON(jsonData: any): Hanged {
        const { id, title, start_question, end_question, word,textAnswer} = jsonData;
        return new Hanged(id, title,start_question, end_question, word, textAnswer);
      }
}