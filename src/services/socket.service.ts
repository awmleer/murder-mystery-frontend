import {Injectable} from '@angular/core';
import io from 'socket.io-client';
import {CONFIG} from "../app/config";
import Socket = SocketIOClient.Socket;


@Injectable()
export class SocketService {
  socket:Socket;

  constructor() {}

  getSocket(){
    if (this.socket == null) {
      this.socket=io.connect(CONFIG.socketUrl);
    }
    return this.socket;
  }

}
