import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameMainPage } from './game-main';
import {GameNotificationComponent} from "../../../components/game-notification/game-notification";

@NgModule({
  declarations: [
    GameMainPage,
    GameNotificationComponent
  ],
  imports: [
    IonicPageModule.forChild(GameMainPage),
  ],
  exports: [
    GameMainPage
  ]
})
export class GameMainPageModule {}
