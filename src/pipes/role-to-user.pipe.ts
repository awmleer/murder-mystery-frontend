import { Pipe, PipeTransform } from '@angular/core';
import {roleId} from "../classes/model";


@Pipe({
  name: 'roleToUser',
  pure: false
})
export class RoleToUserPipe implements PipeTransform {
  transform(roleId: roleId, players) {
  // transform(roleId: any) {
    for (let userId in players) {
      if (players.hasOwnProperty(userId)) {
        if (players[userId].role.id == roleId) {
          return {
            userId:userId,
            username:players[userId].username
          };
        }
      }
    }
    return {
      userId: '',
      username: ''
    };//fallback value
  }
}
