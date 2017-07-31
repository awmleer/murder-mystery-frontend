import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {Usable} from "../../../classes/model";


@IonicPage()
@Component({
  selector: 'page-g-skill',
  templateUrl: 'g-skill.html',
})
export class GSkillPage {

  constructor(
    public navCtrl: NavController,
    public gameSvc: GameService
  ) {}


  activateSkill(skill:Usable){
    if(skill.target=='chosenRole'){
      this.gameSvc.letUserSelectRole().then(roleId=>{
        this.gameSvc.activateUsable(skill.id,roleId);
      });
    }else{
      this.gameSvc.activateUsable(skill.id);
    }
  }


}
