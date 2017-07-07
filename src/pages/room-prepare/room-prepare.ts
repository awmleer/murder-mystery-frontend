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
    this.platformSvc.getRoomInfo().then(roomInfo=>{
      console.log('got room info');
    });
    if (this.socket == null) {
      this.socket=this.socketSvc.getSocket();
      this.socket.on('connect',()=>{
        this.socket.emit('initModel',(data)=>{
          console.log(data);
        });
        console.log('initModel event sent');
      });
    }
  }

}
