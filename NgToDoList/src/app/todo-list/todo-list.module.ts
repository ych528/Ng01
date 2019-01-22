import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { MyPrefixPipe } from './my-prefix.pipe';
import { MySuffixModule } from '../my-suffix/my-suffix.module';

@NgModule({
  declarations: [TodoListComponent, MyPrefixPipe],
  imports: [
    CommonModule, MySuffixModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
