import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GSurveyPage } from './g-survey';

@NgModule({
  declarations: [
    GSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(GSurveyPage),
  ],
  exports: [
    GSurveyPage
  ]
})
export class GSurveyPageModule {}
