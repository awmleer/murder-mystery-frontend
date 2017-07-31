import {Injectable} from '@angular/core';
import {timestamp} from "../classes/model";


@Injectable()
export class ClockService {
  public t:timestamp;

  constructor() {
    this.updateT();
  }

  private updateT():void{
    this.t=Date.now();
    setTimeout(()=>{
      this.updateT();
    },1000);
  }


}
