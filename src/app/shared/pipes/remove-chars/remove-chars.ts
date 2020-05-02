import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeChars',
})
export class RemoveCharsPipe implements PipeTransform {

  transform(value: string) {
    if (value.charAt(2) === ':') {
      return value.substring(3, value.length)
      // or return value.slice(3, value.length);
  }
  return value;
  }
}
