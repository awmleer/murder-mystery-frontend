import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GCluePage } from './g-clue';

@NgModule({
  declarations: [
    GCluePage,
  ],
  imports: [
    IonicPageModule.forChild(GCluePage),
  ],
  exports: [
    GCluePage
  ]
})
export class GCluePageModule {}
