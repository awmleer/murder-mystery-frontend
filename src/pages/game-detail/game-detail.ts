import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameInfo} from "../../classes/game";
import {PlatformService} from "../../services/platform.service";
import {ToastService} from "../../services/toast.service";

/**
 * Generated class for the GameDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {
  gameId:string;
  gameInfo:GameInfo=null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastSvc: ToastService,
    public platformSvc: PlatformService
  ) {}

  ionViewWillEnter(){
    this.gameId=this.navParams.get('gameId');
    this.platformSvc.getGameInfo(this.gameId).then(response=>{
      let data=response.json();
      if (data.status=='ok') {
        this.gameInfo=data.payload;
      }else{
        this.toastSvc.toast(data.payload);
        this.navCtrl.pop();
      }

    });
  }

}
