import {Pipe, PipeTransform} from '@angular/core';
import {Usable, usableId} from "../../../classes/model";

@Pipe({
  name: 'clueActivateCheck',
  pure: false
})

export class ClueActivateCheckPipe implements PipeTransform {
  transform(clueUsablesId:usableId[],usables:{[usableId:number]: Usable;}): boolean {
    for (let usableId of clueUsablesId) {
      if(usables[usableId]){
        return true;
      }
    }
    return false;
  }
}
