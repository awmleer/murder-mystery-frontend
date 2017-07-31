import { Component } from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {

  constructor(
    public accountService: AccountService
  ) {}

  login(){
    this.accountService.login('110','110');
  }

  login2(){
    this.accountService.login('1100','110');
  }

  login3(){
    this.accountService.login('test1','110');
  }

  login4(){
    this.accountService.login('test2','110');
  }

}
