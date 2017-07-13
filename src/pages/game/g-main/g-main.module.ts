import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GMainPage } from './g-main';
import {GameNotificationComponent} from "../../../components/game-notification/game-notification";

@NgModule({
  declarations: [
    GMainPage,
    GameNotificationComponent
  ],
  imports: [
    IonicPageModule.forChild(GMainPage),
  ],
  exports: [
    GMainPage
  ]
})
export class GMainPageModule {}
