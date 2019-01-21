import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getListeners } from '@angular/core/src/render3/discovery_utils';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
  private list: string[] = [];

  add(title: string): void{
    if (title || title.trim()) {
      this.list.push(title);
    }
  }

  getList(): string[] {
    return this.list;
  }
}
