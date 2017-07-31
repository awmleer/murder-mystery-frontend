import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GSkillPage } from './g-skill';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GSkillPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GSkillPage),
  ],
  exports: [
    GSkillPage
  ]
})
export class GSkillPageModule {}
