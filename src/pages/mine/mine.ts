import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {

  constructor(
    private navCtrl: NavController,
    public accountService: AccountService
  ) {}

  login(){
    this.accountService.login('110','110');
  }

}
