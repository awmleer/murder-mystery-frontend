import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPreparePage } from './room-prepare';

@NgModule({
  declarations: [
    RoomPreparePage,
  ],
  imports: [
    IonicPageModule.forChild(RoomPreparePage),
  ],
  exports: [
    RoomPreparePage
  ]
})
export class RoomPreparePageModule {}
