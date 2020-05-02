import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  //Takes a value and makes it lowercase
  transform(value: string, ...args: any[]) {
    return value.toLowerCase();
  }
}
