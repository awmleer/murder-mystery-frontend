import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Clue} from "../../../classes/model";

@IonicPage()
@Component({
  selector: 'page-g-clue',
  templateUrl: 'g-clue.html',
})
export class GCluePage {

  constructor(
    public navCtrl: NavController,
    private gameSvc: GameService
  ) {}

  activateClue(clue:Clue){
    if (clue.usablesId.length <= 0) return;
    // this.gameSvc TODO
  }

}
