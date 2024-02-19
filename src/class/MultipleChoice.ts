import { QuestionEnum } from "./QuestionEnum";

export class MultipleChoice {
    id: string;
    title: string;
    type = QuestionEnum.MultipleChoice;
    question: string;
    answers: MultipleChoiceAnswer[];
    textAnswer: string;
  
    constructor(id: string, title: string, question: string, answers: MultipleChoiceAnswer[], textAnswer: string) {
      this.id = id;
      this.title = title;
      this.question = question;
      this.answers = answers;
      this.textAnswer = textAnswer;
    };

    static fromJSON(jsonData: any): MultipleChoice {
      const { id, title, type, question, answers, textAnswer } = jsonData;
      return new MultipleChoice(id, title, question, answers, textAnswer);
    }
  }
export interface MultipleChoiceAnswer {
    id: number;
    answer: string;
    response: boolean;
  }
  
