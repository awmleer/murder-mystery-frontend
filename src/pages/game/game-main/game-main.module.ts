import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameMainPage } from './game-main';

@NgModule({
  declarations: [
    GameMainPage,
  ],
  imports: [
    IonicPageModule.forChild(GameMainPage),
  ],
  exports: [
    GameMainPage
  ]
})
export class GameMainPageModule {}
