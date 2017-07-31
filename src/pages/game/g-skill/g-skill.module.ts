import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GSkillPage } from './g-skill';

@NgModule({
  declarations: [
    GSkillPage,
  ],
  imports: [
    IonicPageModule.forChild(GSkillPage),
  ],
  exports: [
    GSkillPage
  ]
})
export class GSkillPageModule {}
