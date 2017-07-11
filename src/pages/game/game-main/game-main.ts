import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameCluePage} from "../game-clue/game-clue";
import {GameService} from "../../../services/game.service";
import {GameSurveyPage} from "../../game-survey/game-survey";


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

  goSurveyPage(){
    this.navCtrl.push(GameSurveyPage);
  }

}
