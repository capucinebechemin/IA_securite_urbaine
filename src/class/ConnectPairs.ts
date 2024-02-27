import { QuestionEnum } from "./QuestionEnum";

export class ConnectPairs {
  id: string;
  title: string;
  question: string;
  type = QuestionEnum.ConnectPairs;
  pairs: PairItem[];

  constructor(id: string, title: string, question: string, pairs: PairItem[]) {
    this.id = id;
    this.title = title;
    this.question = question;
    this.pairs = pairs;
  }

  static fromJSON(jsonData: any): ConnectPairs {
    const { id, title, question, pairs } = jsonData;
    return new ConnectPairs(id, title, question, pairs);
  }
}

export interface PairItem {
  item1: string;
  item2: string;
}