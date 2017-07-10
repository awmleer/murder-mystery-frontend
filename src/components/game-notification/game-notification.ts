import { Component } from '@angular/core';
import {GameService} from "../../services/game.service";


@Component({
  selector: 'game-notification',
  templateUrl: 'game-notification.html'
})
export class GameNotificationComponent {

  constructor(
    private gameSvc: GameService
  ) {}

}
