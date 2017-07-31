import {Component} from '@angular/core';
import {GameService} from "../../../../services/game.service";


@Component({
  selector: 'game-notification',
  templateUrl: 'game-notification.html'
})
export class GameNotificationComponent {

  expanding:boolean=false;

  constructor(
    private gameSvc: GameService
  ) {}

  toggleExpand(){
    this.expanding=!this.expanding;
  }

}
