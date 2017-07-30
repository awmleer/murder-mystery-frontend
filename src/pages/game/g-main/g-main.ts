import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {GCluePage} from "../g-clue/g-clue";
import {GameService} from "../../../services/game.service";
import {GSurveyPage} from "../g-survey/g-survey";
import {GItemListPage} from "../g-item-list/g-item-list";
import {GFormPage} from "../g-form/g-form";


@IonicPage()
@Component({
  selector: 'page-g-main',
  templateUrl: 'g-main.html',
})
export class GMainPage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService,
    private modalCtrl: ModalController
    // public navParams: NavParams
  ) {
    this.gameSvc.formModal=this.modalCtrl.create(GFormPage);
  }

  ionViewWillLoad(){
    // this.gameSvc.freshTemplate();
  }
  ionViewDidLoad(){
    this.gameSvc.handleInteraction();
    this.gameSvc.handleStage();
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

  goFormPage(){
    this.navCtrl.push(GFormPage);
  }

}
