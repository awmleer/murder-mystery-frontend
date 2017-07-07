import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Socket = SocketIOClient.Socket;
import {PlatformService} from "../../services/platform.service";
import {GameInfo} from "../../classes/game";
import {GameService} from "../../services/game.service";


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
    public platformSvc: PlatformService,
    public gameSvc: GameService,
  ) {}

  ionViewWillEnter(){
    this.gameSvc.initModel(()=>{
      this.platformSvc.getGameInfo(this.gameSvc.roomModel.gameTemplateId).then(gameInfo=>{
        console.log(gameInfo);
        this.gameInfo=gameInfo;
      });
    });

  }





}
