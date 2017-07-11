import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameService} from "../../services/game.service";


@IonicPage()
@Component({
  selector: 'page-game-investigate',
  templateUrl: 'game-investigate.html',
})
export class GameInvestigatePage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService
    // public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameInvestigatePage');
  }

}
