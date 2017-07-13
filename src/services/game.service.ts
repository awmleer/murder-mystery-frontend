import {Injectable} from "@angular/core";
import {SocketService} from "./socket.service";
import * as jdp from 'jsondiffpatch';
import {placeId, PlayerModel, roleId, RoomModel, usableId} from "../classes/model";
import {Http} from "@angular/http";
import {AlertController} from "ionic-angular";


@Injectable()
export class GameService {
  roomModel:RoomModel;
  playerModel: PlayerModel;
  private patcher;

  constructor(
    private socketSvc: SocketService,
    private alertCtrl: AlertController,
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

  survey(placeId:placeId):Promise<null>{
    return this.socketSvc.inform('survey',{
      placeId: placeId
    });
  }

  activateUsable(usableId:usableId,chosenRoleId?:roleId):Promise<null>{
    return this.socketSvc.inform('activateUsable',{
      usableId: usableId,
      chosenRoleId: chosenRoleId
    });
  }


  letUserSelectRole():Promise<roleId>{
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create();
      alert.setTitle('请选择角色');//TODO: use param to set title
      for (let userId in this.roomModel.players) {
        let role = this.roomModel.players[userId].role;
        alert.addInput({
          type:'radio',
          label: role.name,
          value: role._id.toString(),
          checked: false
        });
      }
      alert.addButton('取消');
      alert.addButton({
        text: '确定',
        handler: data=>{
          resolve(data);
        }
      });
      alert.present();
    });
  }


  letUserSelectUsable(usablesId:usableId[]):Promise<roleId>{
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create();
      alert.setTitle('请选择物品');//TODO: use param to set title
      for (let usableId in usablesId) {
        let usable = this.playerModel.usables[usableId];
        if (!usable) { // if player doesn't have this usable
          continue;
        }
        alert.addInput({
          type:'radio',
          label: usable.name,
          value: usable.usableId.toString(),
          checked: false
        });
      }
      alert.addButton('取消');
      alert.addButton({
        text: '确定',
        handler: data=>{
          resolve(data);
        }
      });
      alert.present();
    });
  }


}
