import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";


@Injectable()
export class AccountService {
  gameModel=new Subject<any>();
  gameModel$=this.gameModel.asObservable();


  constructor(){
    this.gameModel.next({
      a:1,
      b:{
        x:2,
        y:3
      }
    });
  }

}
