import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenString',
})
export class ShortenStringPipe implements PipeTransform {

  transform(value: string, maxChars: number) {
    let lastEmptyIndex = null;

    if (value.length > maxChars) {
      if (value.charAt(maxChars - 1) !== ' ') {
        for (let i = maxChars - 1; i >= 0; i--) {
          if (value[i] === ' ') {
            lastEmptyIndex = i;
            break;
          } else {
            lastEmptyIndex = lastEmptyIndex;
          }
        }
      } else { lastEmptyIndex = value[maxChars]; }
      return value.substring(0, lastEmptyIndex);
    } else { return value; }
  }
}

