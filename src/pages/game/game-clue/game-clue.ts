import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Clue} from "../../../classes/model";

@IonicPage()
@Component({
  selector: 'page-game-clue',
  templateUrl: 'game-clue.html',
})
export class GameCluePage {

  constructor(
    public navCtrl: NavController,
    private gameSvc: GameService
  ) {}

  activateClue(clue:Clue){
    if (clue.usablesId.length <= 0) return;
    // this.gameSvc TODO
  }

}
