import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocketService} from "../../services/socket.service";
import Socket = SocketIOClient.Socket;
import {PlatformService} from "../../services/platform.service";


@IonicPage()
@Component({
  selector: 'page-room-prepare',
  templateUrl: 'room-prepare.html',
})
export class RoomPreparePage {
  socket:Socket=null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platformSvc: PlatformService,
    private socketSvc: SocketService
  ) {
  }

  ionViewWillEnter(){
    // this.platformSvc.getRoomInfo().then(roomInfo=>{
    //   console.log(roomInfo);
    //   this.platformSvc.getGameInfo(roomInfo.gameTemplateId).then(gameInfo=>{
    //     console.log(gameInfo);
    //   });
    // });
    if (this.socket == null) {
      this.socket=this.socketSvc.getSocket();
      this.socket.on('connect',()=>{
        this.socket.emit('initModel',(data)=>{
          console.log(data);
          this.platformSvc.getGameInfo(data.initRoom.gameTemplateId).then(gameInfo=>{
            console.log(gameInfo);
          });
        });
      });
    }
  }

}
