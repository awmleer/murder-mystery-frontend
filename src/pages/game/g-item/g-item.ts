import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Usable} from "../../../classes/model";


@IonicPage()
@Component({
  selector: 'page-g-item',
  templateUrl: 'g-item.html',
})
export class GItemPage {

  constructor(
    private gameSvc: GameService
  ) {}

  activateItem(item:Usable){
    if(item.target=='chosenRole'){
      this.gameSvc.letUserSelectRole().then(roleId=>{
        this.gameSvc.activateUsable(item.id,roleId);
      });
    }else{
      this.gameSvc.activateUsable(item.id);
    }
  }


}
