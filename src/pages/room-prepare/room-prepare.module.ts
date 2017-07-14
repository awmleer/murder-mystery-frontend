import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPreparePage } from './room-prepare';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    RoomPreparePage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(RoomPreparePage),
  ],
  exports: [
    RoomPreparePage
  ]
})
export class RoomPreparePageModule {}
