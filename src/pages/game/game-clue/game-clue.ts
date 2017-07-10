import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GameService} from "../../../services/game.service";

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

}
