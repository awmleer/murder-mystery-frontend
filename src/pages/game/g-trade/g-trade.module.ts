import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GTradePage } from './g-trade';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GTradePage,
  ],
  imports: [
    IonicPageModule.forChild(GTradePage),
    PipesModule
  ],
  exports: [
    GTradePage
  ]
})
export class GTradePageModule {}
