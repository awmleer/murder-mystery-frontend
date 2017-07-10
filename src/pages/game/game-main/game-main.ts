import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameCluePage} from "../game-clue/game-clue";
import {GameService} from "../../../services/game.service";

/**
 * Generated class for the GameMainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-main',
  templateUrl: 'game-main.html',
})
export class GameMainPage {

  constructor(
    public navCtrl: NavController,
    private gameSvc: GameService
    // public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameMainPage');
  }

  goCluePage(){
    this.navCtrl.push(GameCluePage);
  }

}
