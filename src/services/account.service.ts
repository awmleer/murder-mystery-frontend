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

  login(username:string, password: string):Promise<boolean>{
    return this.http.get(CONFIG.apiUrl+`/account/login/`).toPromise().then(response=>{
      let data = response.json();
      if (data.status=='ok'){
        this.user={
          username:username,
          id:data.payload.id
        };
        return true;
      }else{
        this.toastService.toast(data.payload);
        return false;
      }
    });
  }

}
