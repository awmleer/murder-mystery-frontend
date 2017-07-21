import {Pipe, PipeTransform} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {stageMode} from "../../../classes/model";

@Pipe({
  name: 'showConfirmStage'
})

export class ShowConfirmStagePipe implements PipeTransform {
  constructor(
    private gameSvc: GameService
  ){}
  transform(currentStageMode: stageMode): boolean {
    switch (currentStageMode){
      case 'allConfirmed':
      case 'countDownWithConfirm':
        return true;
      case 'singleConfirm':
        return (this.gameSvc.playerModel.roleId == this.gameSvc.roomModel.focusRoleId);
      default:
        return false;
    }
  }
}
