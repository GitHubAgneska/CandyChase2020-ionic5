import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeUnderscore',
  pure: true
})
export class RemoveUnderscorePipe implements PipeTransform {

  
  transform(value: string) {

    let toReplace = /[-_]/gm;
    if (value) {
      return value = value.toString().replace(toReplace , ' ');
    }
  }
}
