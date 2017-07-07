import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {GameInfo} from "../../classes/game";
import {PlatformService} from "../../services/platform.service";
import {ToastService} from "../../services/toast.service";
import {RoomPreparePage} from "../room-prepare/room-prepare";


@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {
  gameId:string;
  gameInfo:GameInfo=null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastSvc: ToastService,
    private alertCtrl: AlertController,
    public platformSvc: PlatformService
  ) {}

  ionViewWillEnter(){
    this.gameId=this.navParams.get('gameId');
    this.platformSvc.getGameInfo(this.gameId).then(gameInfo=>{
      this.gameInfo=gameInfo;
    },()=>{
      this.navCtrl.pop();
    });
  }

  createRoom(){
    let prompt = this.alertCtrl.create({
      title: '创建房间',
      message: "请输入要创建的房间名字",
      inputs: [
        {
          name: 'roomName',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            this.platformSvc.createRoom(this.gameId,data['roomName']).then((result:boolean)=>{
              if (result) {
                this.navCtrl.push(RoomPreparePage);
              }
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
