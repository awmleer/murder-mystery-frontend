import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GTradePage } from './g-trade';

@NgModule({
  declarations: [
    GTradePage,
  ],
  imports: [
    IonicPageModule.forChild(GTradePage),
  ],
  exports: [
    GTradePage
  ]
})
export class GTradePageModule {}
