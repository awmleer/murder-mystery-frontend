import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GItemPage } from './g-item';
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GItemPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GItemPage),
  ],
  exports: [
    GItemPage
  ]
})
export class GItemPageModule {}
