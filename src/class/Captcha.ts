import { QuestionEnum } from "./QuestionEnum";

export class Captcha {
  id: string;
  title: string;
  type = QuestionEnum.Captcha;
  question: string;
  answers: CaptchaAnswer[];

  constructor(id: string, title: string, question: string, answers: CaptchaAnswer[]) {
    this.id = id;
    this.title = title;
    this.question = question;
    this.answers = answers;
  }
  static fromJSON(jsonData: any): Captcha {
    const { id, title, question, answers } = jsonData;
    return new Captcha(id, title, question, answers);
  }
}

export interface CaptchaAnswer {
  id: number;
  answer: string;
  img: string;
  response: boolean;
}