import {Injectable} from "@angular/core";
import {SocketService} from "./socket.service";
import * as jdp from 'jsondiffpatch';
import {placeId, PlayerModel, roleId, RoomModel, usableId, clueId, interactionId, Interaction} from "../classes/model";
import {Http} from "@angular/http";
import {AlertController} from "ionic-angular";
import {ToastService} from "./toast.service";


@Injectable()
export class GameService {
  roomModel:RoomModel;
  playerModel: PlayerModel;
  currentInteractionId: interactionId=null;
  private patcher;

  constructor(
    private socketSvc: SocketService,
    private alertCtrl: AlertController,
    private toastSvc: ToastService,
    private http: Http
  ){
    this.patcher=jdp.create();
    console.log(this.patcher);
    this.socketSvc.on('changeRoomModel',(data)=>{
      this.roomModel=this.patcher.patch(this.roomModel,data);
      console.log('Room model changed');
      console.log(this.roomModel);
    });
    this.socketSvc.on('changePlayerModel',(data)=>{
      this.playerModel=this.patcher.patch(this.playerModel,data);
      if (data['interactions']) {//不论是增加interaction还是删除都会触发handle方法
        this.handleInteraction();
      }
      console.log('Player model changed');
      console.log(this.playerModel);
    });
  }

  // nextInteraction(){
  //   let interactionIds = Object.keys(this.playerModel.interactions);
  //   if (this.currentInteractionId == null && interactionIds.length>0) {
  //     this.currentInteractionId=interactionIds[0];
  //     this.handleInteraction().then(()=>{
  //       this.currentInteractionId=null;
  //       this.nextInteraction();
  //     },()=>{
  //       this.currentInteractionId=null;
  //       this.nextInteraction();
  //     }).catch(()=>{
  //       this.currentInteractionId=null;
  //       this.nextInteraction();
  //     });
  //   }
  // }

  handleInteraction(){
      let interactionIds = Object.keys(this.playerModel.interactions);
      if (this.currentInteractionId == null && interactionIds.length>0) {
        this.currentInteractionId = interactionIds[0];
      }
      let interaction:Interaction =this.playerModel.interactions[this.currentInteractionId];
      let alert = this.alertCtrl.create();
      alert.setTitle(interaction.title);
      alert.setSubTitle(interaction.subtitle);
      for (let i in interaction.options) {
        let option = interaction.options[i];
        alert.addInput({
          type:'radio',
          label: option.text,
          value: option.id.toString(),
          checked: false
        });
      }
      // alert.addButton('取消');//TODO 是否需要cancelable？
      alert.addButton({
        text: '确定',
        handler: data=>{
          this.socketSvc.inform('itrctRes',{
            'interactionId': this.currentInteractionId,
            'optionId': parseInt(data)
          });
          this.currentInteractionId=null;
        }
      });
      alert.present();
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

  survey(placeId:placeId|string):Promise<null>{
    if (typeof placeId=='string') placeId=parseInt(placeId);
    return this.socketSvc.inform('survey',{
      placeId: placeId
    }).then(()=>{
      this.toastSvc.toast('调查成功');
    });
  }

  activateUsable(usableId:usableId|string,chosenRoleId?:roleId|string):Promise<null>{
    if (typeof usableId=='string') usableId=parseInt(usableId);
    if (typeof chosenRoleId=='string') chosenRoleId=parseInt(chosenRoleId);
    return this.socketSvc.inform('activateUsable',{
      usableId: usableId,
      chosenRoleId: chosenRoleId
    }).then(()=>{
      this.toastSvc.toast('物品使用成功');
    });
  }

  activateClue(clueId:clueId|string, usableId:usableId|string):Promise<null>{
    if (typeof clueId=='string') clueId=parseInt(clueId);
    if (typeof usableId=='string') usableId=parseInt(usableId);
    return this.socketSvc.inform('activateClue',{
      clueId:clueId,
      usableId: usableId
    }).then(()=>{
      this.toastSvc.toast('线索触发成功');
    });
  }


  letUserSelectRole():Promise<roleId>{
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create();
      alert.setTitle('请选择角色');
      for (let userId in this.roomModel.players) {
        let role = this.roomModel.players[userId].role;
        alert.addInput({
          type:'radio',
          label: role.name,
          value: role.id.toString(),
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


  letUserSelectUsable(usablesId:usableId[]):Promise<usableId>{
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
          value: usable.id.toString(),
          checked: false
        });
      }
      alert.addButton('取消');
      alert.addButton({
        text: '确定',
        handler: data=>{
          if(typeof data != 'undefined'){
            resolve(data);
          }
        }
      });
      alert.present();
    });
  }


}
