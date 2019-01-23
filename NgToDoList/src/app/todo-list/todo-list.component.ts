import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';
import { TodoStatusType } from './todo-status-type.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private togoListService: TodoListService) { }

  private isCancel = false;
  todoStatusType = TodoStatusType;
  private status = TodoStatusType.All;

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
    let list: Todo[] = [];
    switch (this.status) {
      case TodoStatusType.UnFinished:
        list = this.getUnFinishedList();
        break;
        case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;
        default:
        list = this.togoListService.getList();
    }
    return list;
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

  getCompletedList(): Todo[] {
    return this.togoListService.getWithCompleted(true);
  }
  getUnFinishedList(): Todo[] {
    return this.togoListService.getWithCompleted(false);
  }

  setStatus(inStatus: number): void {
    this.status = inStatus;
  }

  checkStatus(inStatus: number): boolean {
    return this.status === inStatus;
  }
}
