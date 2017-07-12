import {Injectable} from "@angular/core";
import {SocketService} from "./socket.service";
import * as jdp from 'jsondiffpatch';
import {placeId, PlayerModel, RoomModel} from "../classes/model";
import {Http} from "@angular/http";


@Injectable()
export class GameService {
  roomModel:RoomModel;
  playerModel: PlayerModel;
  private patcher;

  constructor(
    private socketSvc: SocketService,
    private http: Http
  ){
    this.patcher=jdp.create();
    console.log(this.patcher);
    this.socketSvc.on('changeRoomModel',(data)=>{
      this.roomModel=this.patcher.patch(this.roomModel,data);
      console.log(this.roomModel);
    });
    this.socketSvc.on('changePlayerModel',(data)=>{
      this.playerModel=this.patcher.patch(this.playerModel,data);
      console.log(this.playerModel);
    });
  }


  initModel():Promise<null>{
    return new Promise((resolve) => {
      this.socketSvc.call('initModel').then((data)=>{
        console.log('initModel got callback');
        console.log(data);
        this.playerModel=data.initPlayer;
        this.roomModel=data.initRoom;
        resolve();
      });
    });
  }

  onGameStarted():Promise<null>{
      return new Promise(resolve => {
        this.socketSvc.on('gameStarted',data=>{
          resolve();
        });
      });
  }

  selectRole(roleId){
    this.socketSvc.inform('selectRole',{
      roleId: roleId
    });
  }

  startGame():Promise<null>{
    return this.socketSvc.inform('startGame');
  }

  survey(placeId:placeId){
    this.socketSvc.inform('survey',{
      placeId: placeId
    });
  }


}
