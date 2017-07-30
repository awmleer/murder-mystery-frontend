import { isDevMode } from "@angular/core"
export const CONFIG = {
  socketUrl:'http://mm.zjuyy.cn:3002',
  apiUrl:isDevMode()?'/api':'http://mm.zjuyy.cn/api'
};
