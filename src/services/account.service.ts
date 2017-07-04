import {Injectable} from "@angular/core";
import {User} from "../classes/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";
import {ToastService} from "./toast.service";

@Injectable()
export class AccountService {
  user:User=null;


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
        this.user={
          phone:phone,
          id:data.payload.id
        };
        this.toastService.toast('登录成功');
        return true;
      }else{
        this.toastService.toast(data.payload);
        return false;
      }
    });
  }

}
