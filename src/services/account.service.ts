import {Injectable} from "@angular/core";
import {UserInfo} from "../classes/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";
import {ToastService} from "./toast.service";

@Injectable()
export class AccountService {
  user:UserInfo=null;


  constructor(
    private http:Http,
    private toastService: ToastService
  ){}

  login(phone:string, password: string):Promise<boolean>{
    return this.http.post(CONFIG.apiUrl+`/account/login/`,{
      phone:phone,
      password:password
    }).toPromise().then(response=>{
      let data = response.json();
      if (data.status=='ok'){
        this.toastService.toast('登录成功');
        this.http.get(CONFIG.apiUrl+'/account/info/').toPromise().then(response=>{
          let data=response.json();
          if (data['status']=='ok') {
            this.user=data['payload'];
          }else {
            this.toastService.toast('获取用户信息失败');
          }
        })
        return true;
      }else{
        this.toastService.toast(data.payload);
        return false;
      }
    });
  }

}
