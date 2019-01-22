import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPrefix'
})
export class MyPrefixPipe implements PipeTransform {

  transform(value: any, exponent: string): any {
    return exponent + '_' + value;
  }

}
