import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'roleToUser',
  pure: false
})
export class RoleToUserPipe implements PipeTransform {
  transform(roleId: number, players) {
  // transform(roleId: any) {
    for (let userId in players) {
      if (players.hasOwnProperty(userId)) {
        if (players[userId].roleId == roleId) {
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
