import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameCluePage} from "../game-clue/game-clue";

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
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameMainPage');
  }

  test(){
    this.navCtrl.push(GameCluePage);
  }

}
