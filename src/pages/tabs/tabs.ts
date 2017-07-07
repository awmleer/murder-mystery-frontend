import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MinePage } from '../mine/mine';
import { HomePage } from '../home/home';
import {AccountService} from "../../services/account.service";
import {NavController} from "ionic-angular";
import {RoomPreparePage} from "../room-prepare/room-prepare";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  tab3Root = MinePage;

  constructor(
    private accountSvc: AccountService,
    private navCtrl: NavController
  ) {}

  ionViewDidLoad(){
    this.accountSvc.initAccount(()=>{
      this.navCtrl.push(RoomPreparePage);
    });
  }
}
