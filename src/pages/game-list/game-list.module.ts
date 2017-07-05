import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameListPage } from './game-list';

@NgModule({
  declarations: [
    GameListPage,
  ],
  imports: [
    IonicPageModule.forChild(GameListPage),
  ],
  exports: [
    GameListPage
  ]
})
export class GameListPageModule {}
