import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Clue} from "../../../classes/model";
import {ToastService} from "../../../services/toast.service";

@IonicPage()
@Component({
  selector: 'page-g-clue',
  templateUrl: 'g-clue.html',
})
export class GCluePage {

  constructor(
    public navCtrl: NavController,
    private toastSvc: ToastService,
    private gameSvc: GameService
  ) {}

  activateClue(clue:Clue){
    if (clue.usablesId.length <= 0) return;
    this.gameSvc.letUserSelectUsable(clue.usablesId).then((selectedUsableId)=>{
      console.log('You have select '+selectedUsableId);
      this.gameSvc.activateClue(clue.id,selectedUsableId).then(()=>{
        this.toastSvc.toast('触发成功');
      });
    });
  }

}
