import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {roleId} from "../../../classes/model";


@IonicPage()
@Component({
  selector: 'page-g-form',
  templateUrl: './g-form.html',
})
export class GFormPage {
  chosenIds: number[]=[];
  voteRoleId: roleId;

  constructor(
    public navCtrl: NavController,
    public gameSvc: GameService
  ) {}


}
