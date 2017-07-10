import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";
import {RoomList} from "../../classes/room";
import {ToastService} from "../../services/toast.service";
import {RoomPreparePage} from "../room-prepare/room-prepare";


@IonicPage()
@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html',
})
export class RoomListPage {
  rooms:RoomList;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastSvc: ToastService,
    public platformSvc: PlatformService
  ) {}

  ionViewWillEnter(){
    this.platformSvc.getRoomList().then(response=>{
      let data=response.json();
      if (data.status=='ok') {
        this.rooms=data.payload;
      }else{
        this.toastSvc.toast(data.payload);
        this.navCtrl.pop();
      }
    })
  }

  enterRoom(roomId:string){
    this.platformSvc.enterRoom(roomId).then(()=>{
      this.navCtrl.push(RoomPreparePage);
    });
  }


}
