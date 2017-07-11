import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameService} from "../../services/game.service";
import {placeId} from "../../classes/model";


@IonicPage()
@Component({
  selector: 'page-game-survey',
  templateUrl: 'game-survey.html',
})
export class GameSurveyPage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService
    // public navParams: NavParams
  ) {}

  survey(placeId:placeId){
    this.gameSvc.survey(placeId);
  }

}
