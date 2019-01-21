import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private togoListService: TodoListService) { }

  ngOnInit() {
  }

  addTodo(inputRef: HTMLInputElement): void {
    console.log(inputRef.value);
    const todo = inputRef.value.trim();
    if (todo) {
      this.togoListService.add(todo);
      inputRef.value = '';
    }

  }

  getList(): Todo[] {
    return this.togoListService.getList();
  }
}
