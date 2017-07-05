import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameDetailPage } from './game-detail';

@NgModule({
  declarations: [
    GameDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GameDetailPage),
  ],
  exports: [
    GameDetailPage
  ]
})
export class GameDetailPageModule {}
