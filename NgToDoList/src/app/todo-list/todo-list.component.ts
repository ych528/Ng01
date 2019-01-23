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

  private isCancel = false;

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

  remove(index: number): void {
    this.togoListService.remove(index);
  }

  edit(todo: Todo): void {
    todo.editable = true;
  }
  update(todo: Todo, newTitle: string): void {
    if (newTitle.trim()) {
      todo.setTitle(newTitle.trim());
      todo.editable = false;
    } else {
      const idx = this.getList().indexOf(todo);
      if ( idx !== -1) {
        this.remove(idx);
      }
    }
  }

  blureven(todo: Todo, newTitle: string): void {
    if (!this.isCancel ) {
      this.update(todo, newTitle);
    }
    this.isCancel = false;
  }
  cancelEditing(todo: Todo): void {
    todo.editable = false;
    this.isCancel = true;
  }

}
