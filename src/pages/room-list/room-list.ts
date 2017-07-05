import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";
import {RoomBrief} from "../../classes/room";

/**
 * Generated class for the RoomListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
    public platformSvc: PlatformService
  ) {}

  ionViewWillEnter(){
    
  }

}
