import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GMainPage } from './g-main';
import {GameNotificationComponent} from "../../../components/game-notification/game-notification";
import {PipesModule} from "../../../pipes/pipes.module";
import {ShowConfirmStagePipe} from "./showConfirmStage.pipe";

@NgModule({
  declarations: [
    GMainPage,
    GameNotificationComponent,
    ShowConfirmStagePipe
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
