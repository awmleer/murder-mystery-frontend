import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GItemListPage } from './g-item-list';
import {WherePipe} from "angular-pipes/src/array/where.pipe";
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    GItemListPage,
    WherePipe
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GItemListPage),
  ],
  exports: [
    GItemListPage
  ]
})
export class GItemListPageModule {}
