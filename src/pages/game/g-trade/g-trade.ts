import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GameService} from "../../../services/game.service";

type thingType='prop' | 'clue' | 'usable';


@IonicPage()
@Component({
  selector: 'page-g-trade',
  templateUrl: 'g-trade.html',
})
export class GTradePage {

  constructor(
    public navCtrl: NavController,
    public gameSvc: GameService
  ) {}

  get trading():boolean{
    return this.gameSvc.playerModel.transaction.withRoleId!=-1;
  }

  thingsChosenAmount:{
    usable:{ [id:number]:number };
    clue:{ [id:number]:number };
    prop:{ [id:number]:number };
  }={
    usable:{},
    clue:{},
    prop:{}
  };


  increaseThing(type:thingType,id){
    if(!this.thingsChosenAmount[type][id])this.thingsChosenAmount[type][id]=0;
    this.thingsChosenAmount[type][id]++;
    console.log(this.thingsChosenAmount);
  }

  decreaseThing(type:thingType,id){
    this.thingsChosenAmount[type][id]--;
    console.log(this.thingsChosenAmount);
  }





}
