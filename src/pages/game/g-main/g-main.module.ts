import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GMainPage } from './g-main';
import {GameNotificationComponent} from "./game-notification/game-notification";
import {PipesModule} from "../../../pipes/pipes.module";
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    GMainPage,
    GameNotificationComponent
  ],
  providers:[
    DatePipe
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GMainPage),
  ],
  exports: [
    GMainPage
  ]
})
export class GMainPageModule {}
