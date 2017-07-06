import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocketService} from "../../services/socket.service";
import Socket = SocketIOClient.Socket;

/**
 * Generated class for the RoomPreparePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
    private socketSvc: SocketService
  ) {
  }

  ionViewWillEnter(){
    if (this.socket == null) {
      this.socket=this.socketSvc.getSocket();
      this.socket.on('initModel',(data)=>{
        console.log(data);
      })
    }
  }

}
