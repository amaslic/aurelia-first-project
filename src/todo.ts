export class ToDo{

  public desc: string;
  public done: boolean;

  constructor(desc: string, done: boolean = false){
    this.desc = desc;
    this.done = done;  
  }

}
