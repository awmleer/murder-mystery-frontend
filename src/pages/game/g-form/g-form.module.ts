import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GFormPage } from './g-form';

@NgModule({
  declarations: [
    GFormPage,
  ],
  imports: [
    IonicPageModule.forChild(GFormPage),
  ],
  exports: [
    GFormPage
  ]
})
export class GFormPageModule {}
