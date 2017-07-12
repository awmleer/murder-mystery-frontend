import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameItemListPage } from './game-item-list';

@NgModule({
  declarations: [
    GameItemListPage,
  ],
  imports: [
    IonicPageModule.forChild(GameItemListPage),
  ],
  exports: [
    GameItemListPage
  ]
})
export class GameItemListPageModule {}
