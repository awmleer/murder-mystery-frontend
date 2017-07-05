import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";


@IonicPage()
@Component({
  selector: 'page-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {
  games=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platformSvc: PlatformService
  ) {}

  ionViewWillEnter(){
    this.platformSvc.getGameList().then(response=>{
      console.log(response.json());
    });
  }



}
