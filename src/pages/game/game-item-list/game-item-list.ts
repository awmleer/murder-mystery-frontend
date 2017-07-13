import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Usable} from "../../../classes/model";


@IonicPage()
@Component({
  selector: 'page-game-item-list',
  templateUrl: 'game-item-list.html',
})
export class GameItemListPage {

  constructor(
    private navCtrl: NavController,
    private gameSvc: GameService
  ) {}

  activateItem(item:Usable){
    if(item.target=='chosenUser'){
      this.gameSvc.letUserSelectRole().then(roleId=>{
        this.gameSvc.activateUsable(item.usableId,roleId);
      });
    }else{
      this.gameSvc.activateUsable(item.usableId);
    }
  }

}
