import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameInvestigatePage } from './game-investigate';

@NgModule({
  declarations: [
    GameInvestigatePage,
  ],
  imports: [
    IonicPageModule.forChild(GameInvestigatePage),
  ],
  exports: [
    GameInvestigatePage
  ]
})
export class GameInvestigatePageModule {}
