import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GameCluePage} from "../game-clue/game-clue";
import {GameService} from "../../../services/game.service";
import {GameSurveyPage} from "../game-survey/game-survey";
import {GameItemListPage} from "../game-item-list/game-item-list";


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
    // this.gameSvc.freshTemplate();
  }

  goCluePage(){
    this.navCtrl.push(GameCluePage);
  }

  goItemPage(){
    this.navCtrl.push(GameItemListPage);
  }

  goSurveyPage(){
    this.navCtrl.push(GameSurveyPage);
  }

}
