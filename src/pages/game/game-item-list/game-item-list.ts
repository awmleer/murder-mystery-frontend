import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameService} from "../../../services/game.service";


@IonicPage()
@Component({
  selector: 'page-game-item-list',
  templateUrl: 'game-item-list.html',
})
export class GameItemListPage {

  constructor(
    public navCtrl: NavController,
    private gameSvc: GameService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameItemListPage');
  }

}
