import { QuestionEnum } from "./QuestionEnum";

export class MultipleChoice {
  id: string;
  title: string;
  type = QuestionEnum.MultipleChoice;
  question: string;
  answers: MultipleChoiceAnswer[];

  constructor(id: string, title: string, question: string, answers: MultipleChoiceAnswer[]) {
    this.id = id;
    this.title = title;
    this.question = question;
    this.answers = answers;
  };

  static fromJSON(jsonData: any): MultipleChoice {
    const { id, title, type, question, answers } = jsonData;
    return new MultipleChoice(id, title, question, answers);
  }
}
export interface MultipleChoiceAnswer {
  id: number;
  answer: string;
  response: boolean;
}

