import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvalue',
  pure: true
  // https://www.bennadel.com/blog/3325-understanding-pipe-instantiation-life-cycles-in-angular-4-2-3.htm
})
export class KeyvaluePipe implements PipeTransform {

    transform(object: object) {
      const a = [];
      for ( const key in object) {
        if (object.hasOwnProperty(key)) {
          a.push({key, value: object[key]});
        }
      }
      // console.log('je suis keyvalue pipe object: ', a);
      return a;
  }
}
