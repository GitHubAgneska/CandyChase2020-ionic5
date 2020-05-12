import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscore',
  pure: true
})
export class RemoveUnderscorePipe implements PipeTransform {


  transform(value: string) {

    const toReplace = /[-_]/gm;
    if (value) {
      return value = value.toString().replace(toReplace , ' ');
    }
  }
}
