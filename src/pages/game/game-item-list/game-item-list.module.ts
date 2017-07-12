import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameItemListPage } from './game-item-list';
import {WherePipe} from "angular-pipes/src/array/where.pipe";

@NgModule({
  declarations: [
    GameItemListPage,
    WherePipe
  ],
  imports: [
    IonicPageModule.forChild(GameItemListPage),
  ],
  exports: [
    GameItemListPage
  ]
})
export class GameItemListPageModule {}
