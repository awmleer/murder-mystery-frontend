import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSurveyPage } from './game-survey';

@NgModule({
  declarations: [
    GameSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(GameSurveyPage),
  ],
  exports: [
    GameSurveyPage
  ]
})
export class GameSurveyPageModule {}
