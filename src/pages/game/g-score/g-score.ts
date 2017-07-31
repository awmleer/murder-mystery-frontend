import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {GameService} from "../../../services/game.service";

@IonicPage()
@Component({
  selector: 'page-g-score',
  templateUrl: 'g-score.html',
})
export class GScorePage {

  constructor(
    public gameSvc: GameService
  ) {}



}
