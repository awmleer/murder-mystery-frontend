import {Injectable} from "@angular/core";
import {UserInfo} from "../classes/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";
import {ToastService} from "./toast.service";
import {SocketService} from "./socket.service";

@Injectable()
export class AccountService {
  user:UserInfo=null;


  constructor(
    private http:Http,
    private socketSvc: SocketService,
    private toastSvc: ToastService
  ){}

  initAccount(callbackWhenHasRoom:()=>any){
      this.http.get(CONFIG.apiUrl+'/account/isLogin/').toPromise().then(response=>{
        let data=response.json();
        if (data['status'] == 'ok') {
          this.freshUserInfo().then((result)=>{
            if(result==true){
              if (this.user.roomId != '') {
                console.log(this.user.roomId);
                callbackWhenHasRoom();
              }
            }
          });
        }
      });
  }

  login(phone:string, password: string):Promise<boolean>{
    return this.http.post(CONFIG.apiUrl+`/account/login/`,{
      phone:phone,
      password:password
    }).toPromise().then(response=>{
      let data = response.json();
      if (data.status=='ok'){
        this.toastSvc.toast('登录成功');
        this.freshUserInfo();
        this.socketSvc.reconnect();
        return true;
      }else{
        this.toastSvc.toast(data.payload);
        return false;
      }
    });
  }

  freshUserInfo():Promise<boolean>{
    return this.http.get(CONFIG.apiUrl+'/account/info/').toPromise().then(response=>{
      let data=response.json();
      if (data['status']=='ok') {
        this.user=data['payload'];
        return true;
      }else {
        this.toastSvc.toast('获取用户信息失败');
        return false;
      }
    });
  }

}
