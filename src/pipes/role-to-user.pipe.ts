import { Pipe, PipeTransform } from '@angular/core';
import {roleId} from "../classes/model";
import {GameService} from "../services/game.service";


@Pipe({
  name: 'roleToUser',
  pure: false
})
export class RoleToUserPipe implements PipeTransform {
  constructor(
    private gameSvc: GameService
  ){}
  transform(roleId: roleId) {
  // transform(roleId: any) {
    let players=this.gameSvc.roomModel.players;
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
