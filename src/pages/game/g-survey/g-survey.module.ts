import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GSurveyPage } from './g-survey';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GSurveyPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GSurveyPage),
  ],
  exports: [
    GSurveyPage
  ]
})
export class GSurveyPageModule {}
