import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";
import {GameInfo} from "../../classes/game";
import {GameService} from "../../services/game.service";
import {GMainPage} from "../game/g-main/g-main";
import {Player} from "../../classes/model";


@IonicPage()
@Component({
  selector: 'page-room-prepare',
  templateUrl: 'room-prepare.html',
})
export class RoomPreparePage {
  gameInfo:GameInfo;
  shouldCloseSocketWhenLeave:boolean=true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public platformSvc: PlatformService,
    public gameSvc: GameService,
  ) {}

  get mePlayer():Player{
    if (this.gameSvc.roomModel && this.gameSvc.playerModel) {
      return this.gameSvc.roomModel.players[this.gameSvc.playerModel.id];
    }else{
      return null;
    }
  }

  ionViewWillEnter(){
    this.gameSvc.initSocket();
    this.gameSvc.initModel().then(()=>{
      if(this.gameSvc.roomModel.roomStage=='start'){
        console.log(1);
        this.goGameMainPage();
      }else{
        this.gameSvc.onGameStarted().then(()=>{
          this.goGameMainPage();
        });
        this.platformSvc.getGameInfo(this.gameSvc.roomModel.gameTemplateId).then(gameInfo=>{
          console.log(gameInfo);
          this.gameInfo=gameInfo;
        });
      }
    });
  }

  ionViewWillUnload(){
    if (this.shouldCloseSocketWhenLeave) {
      this.gameSvc.closeSocket();
    }
  }

  startGame(){
    this.gameSvc.startGame();
    // this.modalCtrl.create(GMainPage).present();
  }


  goGameMainPage(){
    this.gameSvc.closeSocket();
    this.shouldCloseSocketWhenLeave=false;
    this.modalCtrl.create(GMainPage).present().then(()=>{
      this.navCtrl.popToRoot();
    });
  }





}
