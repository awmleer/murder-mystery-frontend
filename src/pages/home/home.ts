import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GameListPage} from "../game-list/game-list";
import {RoomListPage} from "../room-list/room-list";
import {RoomPreparePage} from "../room-prepare/room-prepare";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {}

  goGameList(){
    this.navCtrl.push(GameListPage);
  }

  goRoomList(){
    this.navCtrl.push(RoomListPage);
  }

  test(){
    this.navCtrl.push(RoomPreparePage);
  }

}
