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

  connect(){
    this.socket=io.connect(CONFIG.socketUrl);
    console.log('socket instance init');
  }

  reconnect(){
    if (this.socket) {
      this.disconnect();
    }
    this.connect();
  }

  disconnect(){
    this.socket.disconnect();
    console.log('socket closed');
  }

  call(eventName:string, param?:object):Promise<any>{//call用来做双向的数据交互
    if (!param) param={};
    return new Promise((resolve, reject)=>{
      this.socket.emit(eventName,param,(data)=>{
        resolve(data);
      });
      console.log(eventName + ' called');
    });
  }

  inform(eventName:string, param?:object):Promise<null>{//inform用来做单向的数据交互
    if (!param) param={};
    return new Promise((resolve, reject) => {
      this.socket.emit(eventName,param,(data)=>{
        if (data['status'] == 'ok') {
          resolve();
        }else{
          if (data['payload']) {
            this.toastSvc.toast(data['payload']);
          }
        }
      });
      console.log(eventName + ' informed');
    });
  }

  on(eventName:string,callback:(data)=>void){
    this.socket.off(eventName);
    this.socket.on(eventName, callback);
  }

}
