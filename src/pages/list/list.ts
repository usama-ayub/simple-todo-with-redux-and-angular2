import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../../store';
import { Observable } from 'rxjs/Observable'
import { TodoActions } from './../../store/action/todo';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  @select('todos') todos$: Observable<any>;

  todo: any;
  todoObj: any;
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    private ngRedux: NgRedux<IAppState>,
    private ta: TodoActions
  ) {

  }
  ngOnInit() {
    this.todos$
      .subscribe(arg => {
        this.todo = arg;
      });
  }

  addTodo(todo) {
    if (!todo.valid) { return console.log('field form') }
    this.todoObj = {
      todoTask: todo.value,
      isfavourite: false
    }
    this.ta.addTodo(this.todoObj)
  }

  deleteTodo(index) {
    this.ta.deleteTodo(index)
  }

  isActive(item) {
    this.ta.favouriteTodo(item)
  }

}
