import { QuestionEnum } from "./QuestionEnum";

export class HeightQuestion {
  id: string;
  title: string;
  type = QuestionEnum.Height;
  question: string;
  answers: HeightAnswer[];

  constructor(id: string, title: string, question: string, answers: HeightAnswer[]) {
    this.id = id;
    this.title = title;
    this.question = question;
    this.answers = answers;
  }
  static fromJSON(jsonData: any): HeightQuestion {
    const { id, title, question, answers } = jsonData;
    return new HeightQuestion(id, title, question, answers);
  }
}

export interface HeightAnswer {
  id: number;
  answer: string;
  response: boolean;
}