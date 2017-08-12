import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {GameService} from "../../../services/game.service";
import {ToastService} from "../../../services/toast.service";

type thingType='prop' | 'clue' | 'usable';


@IonicPage()
@Component({
  selector: 'page-g-trade',
  templateUrl: 'g-trade.html',
})
export class GTradePage {

  constructor(
    public navCtrl: NavController,
    public gameSvc: GameService,
    private toastSvc: ToastService
  ) {}

  get trading():boolean{
    return this.gameSvc.playerModel.transaction.withRoleId!=-1;
  }

  get isStarter():boolean{
    return this.gameSvc.playerModel.transaction.isStarter;
  }

  get replied():boolean{
    return this.gameSvc.playerModel.transaction.replied;
  }

  thingsChosenAmount:{
    usable:{ [id:number]:number };
    clue:{ [id:number]:number };
    prop:{ [id:number]:number };
  }={
    usable:{},
    clue:{},
    prop:{}
  };


  increaseThing(type:thingType,id){
    if(!this.thingsChosenAmount[type][id])this.thingsChosenAmount[type][id]=0;
    this.thingsChosenAmount[type][id]++;
    console.log(this.thingsChosenAmount);
  }

  decreaseThing(type:thingType,id){
    this.thingsChosenAmount[type][id]--;
    console.log(this.thingsChosenAmount);
  }


  getTransactions(){
    let transactions=[];
    for (let type in this.thingsChosenAmount) {
      for (let id in this.thingsChosenAmount[type]){
        if (this.thingsChosenAmount[type].hasOwnProperty(id) && this.thingsChosenAmount[type][id]){
          transactions.push({
            type:type,
            transactionId:id,
            amount:this.thingsChosenAmount[type][id]
          });
        }
      }
    }
    return transactions;
  }


  startTrade(){
    this.gameSvc.letUserSelectRole().then((roleId)=>{
      this.gameSvc.startTrade(roleId,this.getTransactions()).then(()=>{
        this.toastSvc.toast('交易创建成功');
        // this.navCtrl.pop();
      });
    });
  }


  replyTrade(accept:boolean){
    this.gameSvc.replyTrade(accept,accept?this.getTransactions():null).then(()=>{
      this.toastSvc.toast('已回复对方的交易请求');
      // this.navCtrl.pop();
    });
  }

  confirmTrade(accept:boolean){
    this.gameSvc.confirmTrade(accept).then(()=>{
      this.toastSvc.toast(accept?'交易成功':'已拒绝交易');
    });
  }


}
