import {Pipe, PipeTransform} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {stageMode} from "../../../classes/model";

@Pipe({
  name: 'showSubmitStageForm'
})

export class ShowSubmitStageFormPipe implements PipeTransform {
  constructor(
    private gameSvc: GameService
  ){}
  transform(currentStageMode: stageMode): boolean {
    switch (currentStageMode){
      case 'fillForm':
        return true;
      case 'singleForm':
        return (this.gameSvc.playerModel.roleId == this.gameSvc.roomModel.focusRoleId);
      default:
        return false;
    }
  }
}
