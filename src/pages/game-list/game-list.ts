import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlatformService} from "../../services/platform.service";
import {GameBrief} from "../../classes/game";
import {GameDetailPage} from "../game-detail/game-detail";
import {ToastService} from "../../services/toast.service";


@IonicPage()
@Component({
  selector: 'page-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {
  games:GameBrief[]=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastSvc: ToastService,
    public platformSvc: PlatformService
  ) {}

  ionViewWillEnter(){
    this.platformSvc.getGameList().then(response=>{
      console.log(response.json());
      let data=response.json();
      if (data.status=='ok') {
        this.games=data['payload'];
      }else{
        this.toastSvc.toast(data['payload']);
        this.navCtrl.pop();
      }
    });
  }

  goGameDetail(gameId){
    this.navCtrl.push(GameDetailPage,{
      gameId:gameId
    });
  }



}
