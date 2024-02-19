export class Point{
    point:number;
    questionType: string; //mettre la classe entière plus tard
    displayAnswer?:string;
    
    constructor(p : number, q : string, displayAnswer?:string){
        this.point = p;
        this.questionType = q;
        this.displayAnswer = displayAnswer;
    }
}