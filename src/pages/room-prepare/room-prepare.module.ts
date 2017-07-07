import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomPreparePage } from './room-prepare';
import {RoleToUserPipe} from "../../pipes/role-to-user.pipe";

@NgModule({
  declarations: [
    RoomPreparePage,
    RoleToUserPipe,
  ],
  imports: [
    IonicPageModule.forChild(RoomPreparePage),
  ],
  exports: [
    RoomPreparePage
  ]
})
export class RoomPreparePageModule {}
