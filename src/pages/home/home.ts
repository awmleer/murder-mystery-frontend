import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameListPage} from "../game-list/game-list";
import {RoomListPage} from "../room-list/room-list";
import {RoomPreparePage} from "../room-prepare/room-prepare";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public accountSvc: AccountService
  ) {}

  goGameList(){
    this.navCtrl.push(GameListPage);
  }

  goRoomList(){
    this.navCtrl.push(RoomListPage);
  }

  goRoomPrepare(){
    this.navCtrl.push(RoomPreparePage);
  }

}
