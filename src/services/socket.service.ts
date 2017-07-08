import {Injectable} from '@angular/core';
import io from 'socket.io-client';
import {CONFIG} from "../app/config";
import Socket = SocketIOClient.Socket;
import {ToastService} from "./toast.service";


@Injectable()
export class SocketService {
  socket:Socket;

  constructor(
    private toastSvc: ToastService
  ) {}

  initSocket(){
    this.socket=io.connect(CONFIG.socketUrl);
    console.log('socket instance init');
  }

  checkSocket(){
    if (this.socket == null) {
      this.initSocket();
    }
  }

  getSocket(){
    this.checkSocket();
    return this.socket;
  }

  call(eventName:string, ...args:any[]){//call用来做双向的数据交互
    this.checkSocket();
    this.socket.emit(eventName,...args);
    console.log(eventName + ' called');
  }

  inform(eventName:string, param?:object){//inform用来做单向的数据交互
    this.checkSocket();
    if (!param) param={};
    this.socket.emit(eventName,param,(data)=>{
      if (data['status'] == 'fail') {
        this.toastSvc.toast(data['payload']);
      }
    });
    console.log(eventName + ' informed');
  }

  on(eventName:string,callback:(data)=>void){
    this.checkSocket();
    this.socket.on(eventName, callback);
  }

}
