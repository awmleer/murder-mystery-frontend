export type timestamp = number;
export type roleId = number;
export type usableId = number;
export type placeId =number;
export type clueId =number;
export type stageId = number;
export type userId = string;
export type propId = number;
export type uri = string;



export interface Element{
  id: string | number;
  name: string;
}


export interface RoomModel {
  _id: string;
  gameTemplateId: string;
  players: {
    [playerId:string]: PlayerInRoomModel;
  };
  roomStage: "prepare" | "start";
  gameStage: number; // -1:未开始 0:阶段0 1:阶段1 ....
  stageBeginAt: timestamp;
  roleAvailable: number[]; // 可选角色
  vote: {
    optionalRolesId: roleId[];// 投票阶段可投的role_id
    description: string;
  };
  places: {
    [placeId:number]: Place;
  };
  focusRoleId: roleId; //某些stage的关键角色ID
}

export interface PlayerInRoomModel {
  userId: userId;
  username: string;
  role: Role;//选择角色后出现
  socketId: string; //(""表示未连接或未进入房间)
  stageConfirm: boolean // true:玩家已完成当前回合
}

export interface Role extends Element{
  id: roleId;
  name: string;
  necessary: boolean;
  picture: uri;
  avatar: uri;
  description: string;
  placesCanSurveyId: placeId[];
}




export interface PlayerModel {
  _id: string;
  userId: string;
  username: string;
  roleId: roleId;
  socketId: string;
  lastSurveyedAt: timestamp;//上次调查时间
  note: string;//笔记
  roundBeginAt: timestamp;//暂时没啥用

  singleFormOptionalRolesId: roleId[];//单人决策阶段可选的roles，如果玩家不是阶段主导者，值为[]
  stageConfirm: Boolean;

  questions: Question[]; //问卷阶段该角色的问题
  documents: PlayerDocument[];//人物介绍，根据阶段显示，阶段未到的document不在此数组中
  clues: {
    [clueId:number]: Clue;
  };
  usables: {
    [usableId:number]: Usable;
  };
  notifications: Notification[];
  props:{
    [propId:number]: Prop;
  };
}

export interface PlayerDocument {
  _id: string;
  content: string;
  stage: number;
  Type: "pic" | "text"
}

export interface Prop {
  id: propId;
  name: string;
  value: number;
  specialType: "none" //暂定
}

export interface Clue {
  id: clueId;
  name: string;
  Type: "pic" | "text";
  content: string;//uri or text
  description: string;
  usablesId: usableId[]//可对该线索使用的道具
}

export interface Notification {
  time: timestamp;
  from: roleId;
  Type: "text" | "pic"; // 暂时只有text
  content: string
}

export interface Usable {
  id: usableId;
  name: string;
  uri: uri;//图片的url
  cd: number;
  category: "item" | "skill";
  target: "self" | "chosenRole" | roleId;
  lastUsedAt: timestamp;
  amount: number;
  consumable: boolean;
}

export interface Question {
  _id: number;//从0开始递增
  question: string;
  choices: {
    _id: number; //从0开始递增
    text: string
  }[];
}

export interface Place {
  id: placeId;
  name: string;
  description: string;
  costAp: number;
  surveySuccPsb: number;
}
