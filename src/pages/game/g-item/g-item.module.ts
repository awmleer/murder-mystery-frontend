import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GItemPage } from './g-item';
import {WherePipe} from "angular-pipes/src/array/where.pipe";
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GItemPage,
    WherePipe
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
