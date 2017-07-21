import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GFormPage } from './g-form';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GFormPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GFormPage),
  ],
  exports: [
    GFormPage
  ]
})
export class GFormPageModule {}
