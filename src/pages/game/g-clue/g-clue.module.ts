import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GCluePage } from './g-clue';
import {DictToArrayPipe} from "../../../pipes/dict-to-array";

@NgModule({
  declarations: [
    GCluePage,
    DictToArrayPipe
  ],
  imports: [
    IonicPageModule.forChild(GCluePage),
  ],
  exports: [
    GCluePage
  ]
})
export class GCluePageModule {}
