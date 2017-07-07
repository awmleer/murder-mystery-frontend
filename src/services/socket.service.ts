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

  call(eventName:string, ...args:any[]){
    this.checkSocket();
    this.socket.emit(eventName,...args);
  }

  inform(eventName:string, param?:object){
    if (!param) param={};
    this.socket.emit(eventName,param,(data)=>{
      if (data['status'] == 'fail') {
        this.toastSvc.toast(data['payload']);
      }
    });
  }

}
