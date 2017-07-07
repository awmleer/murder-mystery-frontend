import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";
import {ToastService} from "./toast.service";
import {AccountService} from "./account.service";
import {RoomInfo} from "../classes/room";
import {GameInfo} from "../classes/game";


@Injectable()
export class PlatformService {
  constructor(
    private http: Http,
    private accountSvc: AccountService,
    private toastSvc: ToastService
  ) {}

  getGameList():Promise<any>{
    return this.http.get(CONFIG.apiUrl+'/game/list/').toPromise();
  }

  getGameInfo(gameId:string):Promise<GameInfo>{
    return this.http.get(CONFIG.apiUrl+`/game/${gameId}/info/`).toPromise().then(response=>{
      let data = response.json();
      if (data['status']=='ok') {
        return data['payload'];
      }else{
        this.toastSvc.toast('获取游戏信息失败');
        throw new Error();
      }
    });
  }

  getRoomList():Promise<any>{
    return this.http.get(CONFIG.apiUrl+'/room/list/').toPromise();
  }

  getRoomInfo(roomId:string=this.accountSvc.user.roomId):Promise<RoomInfo>{
    return this.http.get(CONFIG.apiUrl+`/room/${roomId}/info/`).toPromise().then(response=>{
      let data = response.json();
      if (data['status']=='ok') {
        return data['payload'];
      }else{
        this.toastSvc.toast('获取房间信息失败');
        throw new Error();
      }
    });
  }

  createRoom(gameId:string,roomName:string):Promise<boolean>{
    return this.http.post(CONFIG.apiUrl+'/room/create/',{
      gameTemplateId:gameId,
      roomName:roomName
    }).toPromise().then(response=>{
      if (response.json()['status']=='ok'){
        return true;
      }else{
        this.toastSvc.toast(response.json()['payload']);
        return false;
      }
    });
  }

  enterRoom(roomId:string):Promise<any>{
    return this.http.get(CONFIG.apiUrl+`/room/${roomId}/enter/`).toPromise();
  }


}
