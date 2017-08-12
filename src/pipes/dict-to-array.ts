import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dictToArray',
  pure: false
})
export class DictToArrayPipe implements PipeTransform {
  //这个pipe会把字典转成数组，同时把字典的key作为数组的element的一个属性，因此请确保数组的element本身是不含有key这个属性的，否则会被这个pipe的操作所覆盖
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
