import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomListPage } from './room-list';
import {KeysPipe} from "angular-pipes/src/object/keys.pipe";

@NgModule({
  declarations: [
    RoomListPage,
    KeysPipe
  ],
  imports: [
    IonicPageModule.forChild(RoomListPage),
  ],
  exports: [
    RoomListPage
  ]
})
export class RoomListPageModule {}
