import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dictToArray',
  pure: false
})
export class DictToArrayPipe implements PipeTransform {

  transform(dict: object) {
    let arr=[];
    for (let key in dict) {
      dict['key'] = key;
      arr.push(dict);
    }
    return arr;
  }
}
