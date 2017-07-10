import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameCluePage } from './game-clue';

@NgModule({
  declarations: [
    GameCluePage,
  ],
  imports: [
    IonicPageModule.forChild(GameCluePage),
  ],
  exports: [
    GameCluePage
  ]
})
export class GameCluePageModule {}
