import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GCluePage } from './g-clue';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GCluePage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GCluePage),
  ],
  exports: [
    GCluePage
  ]
})
export class GCluePageModule {}
