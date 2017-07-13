import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GCluePage} from "../g-clue/g-clue";
import {GameService} from "../../../services/game.service";
import {GSurveyPage} from "../g-survey/g-survey";
import {GItemListPage} from "../g-item-list/g-item-list";


@IonicPage()
@Component({
  selector: 'page-g-main',
  templateUrl: 'g-main.html',
})
export class GMainPage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService
    // public navParams: NavParams
  ) {}

  ionViewWillLoad(){
    // this.gameSvc.freshTemplate();
  }

  goCluePage(){
    this.navCtrl.push(GCluePage);
  }

  goItemPage(){
    this.navCtrl.push(GItemListPage);
  }

  goSurveyPage(){
    this.navCtrl.push(GSurveyPage);
  }

}
