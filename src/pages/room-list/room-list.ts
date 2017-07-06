import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";
import {RoomBrief} from "../../classes/room";
import {ToastService} from "../../services/toast.service";


@IonicPage()
@Component({
  selector: 'page-room-list',
  templateUrl: 'room-list.html',
})
export class RoomListPage {
  rooms:RoomBrief[];

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

}
