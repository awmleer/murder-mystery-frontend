import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GScorePage } from './g-score';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GScorePage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GScorePage),
  ],
  exports: [
    GScorePage
  ]
})
export class GScorePageModule {}
