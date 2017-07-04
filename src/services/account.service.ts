import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {User} from "../classes/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";

@Injectable()
export class AccountService {
  user:User;


  constructor(
    private http:Http
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
        return false;
      }
    });
  }

}
