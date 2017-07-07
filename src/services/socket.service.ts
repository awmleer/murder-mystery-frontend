import {Injectable} from '@angular/core';
import io from 'socket.io-client';
import {CONFIG} from "../app/config";
import Socket = SocketIOClient.Socket;


@Injectable()
export class SocketService {
  socket:Socket;

  constructor() {}

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

  emit(eventName:string,...args:any[]){
    // this.socket.emit(eventName)
    this.checkSocket();
    args.unshift(eventName);
    this.socket.emit.apply(this,args);
  }

}
