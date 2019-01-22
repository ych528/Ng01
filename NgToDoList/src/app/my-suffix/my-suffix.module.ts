import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySuffixPipe } from './my-suffix.pipe';

@NgModule({
  declarations: [MySuffixPipe],
  imports: [
    CommonModule
  ],
  exports: [MySuffixPipe]
})
export class MySuffixModule { }
