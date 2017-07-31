import { NgModule } from '@angular/core';
import {DictToArrayPipe} from "./dict-to-array";
import {RoleToUserPipe} from "./role-to-user.pipe";
import {WherePipe} from "angular-pipes/src/array/where.pipe";

@NgModule({
  declarations: [
    DictToArrayPipe,
    RoleToUserPipe,
    WherePipe
  ],
  imports: [],
  exports: [
    DictToArrayPipe,
    RoleToUserPipe,
    WherePipe
  ]
})
export class PipesModule {}
