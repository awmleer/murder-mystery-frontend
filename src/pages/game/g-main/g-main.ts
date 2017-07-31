import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {GCluePage} from "../g-clue/g-clue";
import {GameService} from "../../../services/game.service";
import {GSurveyPage} from "../g-survey/g-survey";
import {GItemListPage} from "../g-item-list/g-item-list";
import {GFormPage} from "../g-form/g-form";
import {ClockService} from "../../../services/clock.service";


@IonicPage()
@Component({
  selector: 'page-g-main',
  templateUrl: 'g-main.html',
})
export class GMainPage {

  constructor(
    private navCtrl: NavController,
    public gameSvc: GameService,
    public modalCtrl: ModalController,
    public clockSvc: ClockService
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

  countDown(){
    return Math.round(
      this.gameSvc.roomModel.currentStage.duration-(this.clockSvc.t-this.gameSvc.roomModel.stageBeginAt)/1000
    );
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
