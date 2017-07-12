import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Usable, usableId} from "../../../classes/model";


@IonicPage()
@Component({
  selector: 'page-game-item-list',
  templateUrl: 'game-item-list.html',
})
export class GameItemListPage {

  constructor(
    public navCtrl: NavController,
    private gameSvc: GameService
  ) {}

  activateItem(item:Usable){
    if(item.target=='chosenUser'){
      //TODO
    }
    this.gameSvc.activateUsable(item.usableId);
  }

}
