import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySuffix'
})
export class MySuffixPipe implements PipeTransform {
  transform(value: any, exponent: string): any {
    return  value + '_'  + exponent;
  }
}
