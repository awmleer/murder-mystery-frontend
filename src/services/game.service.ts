import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {SocketService} from "./socket.service";
import * as jdp from 'jsondiffpatch';

@Injectable()
export class GameService {
  roomModel;
  playerModel;//TODO type definition
  private patcher;

  constructor(
    private socketSvc: SocketService
  ){
    this.patcher=jdp.create();
    console.log(this.patcher);
    this.socketSvc.on('changeRoomModel',(data)=>{
      this.roomModel=this.patcher.patch(this.roomModel,data);
      console.log(this.roomModel);
    });
    this.socketSvc.on('changeGameModel',(data)=>{
      this.playerModel=this.patcher.patch(this.playerModel,data);
      console.log(this.playerModel);
    });
  }


  initModel(callback:()=>any){
    this.socketSvc.call('initModel',(data)=>{
      console.log('initModel got callback');
      console.log(data);
      this.playerModel=data.initPlayer;
      this.roomModel=data.initRoom;
      callback();
    });
  }

  selectRole(roleId){
    this.socketSvc.inform('selectRole',{
      roleId:roleId
    });
  }


}
