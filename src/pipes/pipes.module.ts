import { NgModule } from '@angular/core';
import {DictToArrayPipe} from "./dict-to-array";
import {RoleToUserPipe} from "./role-to-user.pipe";

@NgModule({
  declarations: [
    DictToArrayPipe,
    RoleToUserPipe
  ],
  imports: [],
  exports: [
    DictToArrayPipe,
    RoleToUserPipe
  ]
})
export class PipesModule {}
