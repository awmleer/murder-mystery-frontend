import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../app/config";

@Injectable()
export class PlatformService {
  constructor(
    private http: Http
  ) {}

  getGameList():Promise<any>{
    return this.http.get(CONFIG.apiUrl+'/game/list/').toPromise();
  }


}
