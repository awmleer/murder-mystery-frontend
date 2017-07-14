import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dictToArray',
  pure: false
})
export class DictToArrayPipe implements PipeTransform {

  transform(dict: object) {
    let arr=[];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        let element = dict[key];
        element['key'] = key;
        arr.push(element);
      }
    }
    return arr;
  }
}
