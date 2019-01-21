import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getListeners } from '@angular/core/src/render3/discovery_utils';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
  private list: Todo[] = [];

  add(title: string): void {
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  getList(): Todo[] {
    return this.list;
  }
}
