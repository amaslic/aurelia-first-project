import { ToDo } from './todo';

export class App {
  public title: string;
  public todo: ToDo[];
  public newTodo: string;
 
  constructor(){
    this.title = 'Aurelia ToDo App';
    this.newTodo = "";
    this.todo = [];

    this.todo.push(new ToDo('Uci aureliu'));
    this.todo.push(new ToDo('Uci aureliu i dalje'));
    this.todo.push(new ToDo('Uci aureliu i opet'));

  }

  
  public addTodo(){
    this.todo.push(new ToDo(this.newTodo));
    this.newTodo = "";
  }

  public deleteTodo(item){
    this.todo.splice(this.todo.indexOf(item), 1);
  }

}
