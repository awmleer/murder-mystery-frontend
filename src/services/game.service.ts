import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {SocketService} from "./socket.service";


@Injectable()
export class GameService {
  roomModel;
  gameModel;//TODO type definition

  constructor(
    private socketSvc: SocketService
  ){}


  initModel(callback:()=>any){
    this.socketSvc.emit('initModel',(data)=>{
      this.gameModel=data.initGame;
      this.roomModel=data.initRoom;
      callback();
    });
  }

  selectRole(roleId){
    this.socketSvc.emit('selectRole',{
      roleId:roleId
    });
  }

}
