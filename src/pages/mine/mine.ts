import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountService} from "../../services/account.service";
import {User} from "../../classes/user";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  user:User;

  constructor(
    private navCtrl: NavController,
    private accountService: AccountService
  ) {
    this.user=accountService.user;
  }

  login(){
    this.accountService.login('110','110');
  }

}
