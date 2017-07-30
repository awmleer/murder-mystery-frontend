import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {GCluePage} from "../g-clue/g-clue";
import {GameService} from "../../../services/game.service";
import {GSurveyPage} from "../g-survey/g-survey";
import {GItemListPage} from "../g-item-list/g-item-list";
import {GFormPage} from "../g-form/g-form";
import Timer = NodeJS.Timer;


@IonicPage()
@Component({
  selector: 'page-g-main',
  templateUrl: 'g-main.html',
})
export class GMainPage {
  countDownIntervalId:Timer=null;
  countDown:number=null;

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

  ionViewWillEnter(){
    this.updateCountDown();
    this.countDownIntervalId=setInterval(()=>{
      this.updateCountDown();
    },1000);
  }

  ionViewWillLeave(){
    if (this.countDownIntervalId) {
      clearInterval(this.countDownIntervalId);
    }
  }

  updateCountDown(){
    if(this.gameSvc.roomModel.currentStage.duration){
      this.countDown=Math.round(
        this.gameSvc.roomModel.currentStage.duration-(Date.now()-this.gameSvc.roomModel.stageBeginAt)/1000
      );
      if (this.countDown < 0) {
        this.countDown=0;
      }
    }
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
