import {Injectable} from "@angular/core";
import {SocketService} from "./socket.service";
import * as jdp from 'jsondiffpatch';
import {placeId, PlayerModel, roleId, RoomModel, usableId, clueId, interactionId, Interaction} from "../classes/model";
import {Http} from "@angular/http";
import {AlertController, Modal, ModalController} from "ionic-angular";
import {ToastService} from "./toast.service";


@Injectable()
export class GameService {
  roomModel:RoomModel;
  playerModel: PlayerModel;
  currentInteractionId: interactionId=null;
  formModal:Modal;
  private patcher;

  constructor(
    private socketSvc: SocketService,
    private alertCtrl: AlertController,
    private toastSvc: ToastService,
    private modalCtrl: ModalController,
    private http: Http
  ){
    this.patcher=jdp.create();
    console.log(this.patcher);
  }

  closeSocket(){
      this.socketSvc.disconnect();
  }

  initSocket(){
    this.socketSvc.connect();
    this.socketSvc.on('changeRoomModel',(data)=>{
      console.log('got changeRoomModel event',data);
      this.roomModel=this.patcher.patch(this.roomModel,data);
      if (data['currentStage']) {//如果当前的stage发生变化
        this.handleStage();
      }
      console.log('Room model changed');
      console.log(this.roomModel);
    });
    this.socketSvc.on('changePlayerModel',(data)=>{
      console.log('got changePlayerModel event',data);
      this.playerModel=this.patcher.patch(this.playerModel,data);
      if (data['interactions']) {//不论是增加interaction还是删除都会触发handle方法
        this.handleInteraction();
      }
      console.log('Player model changed');
      console.log(this.playerModel);
    });
  }

  handleStage(){
    this.formModal.dismiss();
    let mode = this.roomModel.currentStage.mode;
    if (mode=='fillForm' || mode=='singleForm') {
      this.formModal.present().then(()=>{
        this.formModal.dismiss().then(()=>{
          this.formModal.present();
        })
      });
    }
  }

  confirmStage(){
    this.socketSvc.inform('stageEvents',{
      type:'stageConfirm'
    });
  }

  submitStageForm(choices:any[],chosenRoleId):Promise<void>{
    let type:string;
    if (this.roomModel.currentStage.mode=='singleForm') {
      type='submitSingleForm';
    }else if(this.roomModel.currentStage.mode=='fillForm'){
      type='submitForm';
    }
    return this.socketSvc.inform('stageEvents',{
      type:type,
      choices:choices,
      chosenRoleId:chosenRoleId
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
    console.log(interactionIds);
    if (this.currentInteractionId == null && interactionIds.length>0) {
      this.currentInteractionId = interactionIds[0];
    }else {
      return;
    }
    let interaction:Interaction = this.playerModel.interactions[this.currentInteractionId];
    let alert = this.alertCtrl.create();
    alert.setTitle(interaction.title);
    alert.setSubTitle(interaction.subtitle);
    for (let option of interaction.options) {
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
        console.log('initModel got callback',data);
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
          if(typeof data != 'undefined') {
            resolve(parseInt(data));
          }
        }
      });
      alert.present();
    });
  }


  letUserSelectUsable(usablesId:usableId[]):Promise<usableId>{
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create();
      alert.setTitle('请选择物品');//TODO: use param to set title
      for (let usableId of usablesId) {
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
            resolve(parseInt(data));
          }
        }
      });
      alert.present();
    });
  }

  startTrade(roleId, transaction):Promise<null>{
    return this.socketSvc.inform('tradeEvents',{
      type:'startAndChoose',
      tradeRoleId: roleId,
      transaction: transaction
    });
  }

  replyTrade(transaction):Promise<null>{
    return this.socketSvc.inform('tradeEvents',{
      type:'choose',
      transaction: transaction
    });
  }

  rejectTrade():Promise<null>{
    return this.socketSvc.inform('tradeEvents',{
      type:'reject'
    });
  }

  confirmTrade():Promise<null>{
    return this.socketSvc.inform('tradeEvents',{
      type:'confirm'
    });
  }


}
