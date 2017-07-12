import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";
import {GameInfo} from "../../classes/game";
import {GameService} from "../../services/game.service";
import {GameMainPage} from "../game/game-main/game-main";


@IonicPage()
@Component({
  selector: 'page-room-prepare',
  templateUrl: 'room-prepare.html',
})
export class RoomPreparePage {
  gameInfo:GameInfo;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public platformSvc: PlatformService,
    public gameSvc: GameService,
  ) {}

  ionViewWillEnter(){
    this.gameSvc.initModel().then(()=>{
      if(this.gameSvc.roomModel.roomStage=='start'){
        this.goGameMainPage();
      }
      this.gameSvc.onGameStarted().then(()=>{
        this.goGameMainPage();
      });
      this.platformSvc.getGameInfo(this.gameSvc.roomModel.gameTemplateId).then(gameInfo=>{
        console.log(gameInfo);
        this.gameInfo=gameInfo;
      });
    });

  }

  startGame(){
    this.gameSvc.startGame().then(()=>{
      this.goGameMainPage();
    });
    // this.modalCtrl.create(GameMainPage).present();
  }


  goGameMainPage(){
    this.modalCtrl.create(GameMainPage).present();
  }





}
