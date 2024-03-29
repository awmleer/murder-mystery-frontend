import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GameService} from "../../../services/game.service";


@IonicPage()
@Component({
  selector: 'page-g-survey',
  templateUrl: 'g-survey.html',
})
export class GSurveyPage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService
    // public navParams: NavParams
  ) {}

  survey(placeId){
    this.gameSvc.survey(placeId);
  }

}
