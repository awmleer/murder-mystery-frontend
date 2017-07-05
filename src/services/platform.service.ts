import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";
import {ToastService} from "./toast.service";

@Injectable()
export class PlatformService {
  constructor(
    private http: Http,
    private toastSvc: ToastService
  ) {}

  getGameList():Promise<any>{
    return this.http.get(CONFIG.apiUrl+'/game/list/').toPromise();
  }

  getGameInfo(gameId:string):Promise<any>{
    return this.http.get(CONFIG.apiUrl+`/game/${gameId}/info/`).toPromise();
  }

  getRoomList():Promise<any>{
    return this.http.get(CONFIG.apiUrl+'/room/list/').toPromise();
  }

  getRoomInfo(roomId:string):Promise<any>{
    return this.http.get(CONFIG.apiUrl+`/room/${roomId}/info/`).toPromise();
  }

  createRoom(gameId:string,roomName:string):Promise<any>{
    return this.http.post(CONFIG.apiUrl+'/room/create/',{
      gameTemplateId:gameId,
      roomName:roomName
    }).toPromise();
  }

  enterRoom(roomId:string):Promise<any>{
    return this.http.get(CONFIG.apiUrl+`/room/${roomId}/enter/`).toPromise();
  }


}
