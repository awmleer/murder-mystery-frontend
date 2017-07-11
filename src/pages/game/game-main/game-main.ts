import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameCluePage} from "../game-clue/game-clue";
import {GameService} from "../../../services/game.service";
import {GameInvestigatePage} from "../../game-investigate/game-investigate";


@IonicPage()
@Component({
  selector: 'page-game-main',
  templateUrl: 'game-main.html',
})
export class GameMainPage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService
    // public navParams: NavParams
  ) {}

  ionViewWillLoad(){
    this.gameSvc.freshTemplate();
  }

  goCluePage(){
    this.navCtrl.push(GameCluePage);
  }

  goInvestigatePage(){
    this.navCtrl.push(GameInvestigatePage);
  }

}
