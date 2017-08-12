export type timestamp = number;
export type uri = string;
export type stageMode = 'fillForm' | 'public' | 'singleForm' | 'countDown' | 'allConfirmed' | 'countDownWithConfirm' | 'singleConfirm';


//Element是那些可以在弹框中进行选择的东西
export interface Element{
  id: string | number;
  name: string;
}



/* Room */

export interface RoomModel {
  // _id: string;
  gameTemplateId: string;
  players: {
    [userId:string]: Player;
  };
  roomStage: "prepare" | "start";
  gameStage: stageId; // -1:未开始 0:阶段0 1:阶段1 ....
  stageBeginAt: timestamp;
  roleAvailable: number[]; // 可选角色
  vote: {
    optionalRolesId: roleId[];// 投票阶段可投的role_id
    description: string;
  };
  places: {
    [placeId:number]: Place;
  };
  stages: StageBrief[];
  currentStage: Stage;
  focusRoleId: roleId; //某些stage的关键角色ID
  results:{ //得分公示
    roleId: roleId;
    scores: number;
  }[];
}


export type stageId = number;
export interface StageBrief {
  id: stageId;
  name: string;
}
export interface Stage {
  id: stageId;
  name: string;
  description: string;
  mode: stageMode;
  duration: number;
  vote: {
    optionalRolesId: roleId[];
    description: string;
  };
  focusRoleId: roleId;
  canSurvey: boolean;
  canSkill: boolean;
  canItem: boolean;
  canTrade: boolean;
}

export type userId = string;
export interface Player {
  id: userId;
  username: string;
  role: Role;//选择角色后出现
  socketId: string; //(""表示未连接或未进入房间)
  stageConfirm: boolean // true:玩家已完成当前回合
}

export type roleId = number;
export interface Role extends Element{
  id: roleId;
  name: string;
  necessary: boolean;
  picture: uri;
  avatar: uri;
  description: string;
  placesCanSurveyId: placeId[];
}



/* Player */

export interface PlayerModel {
  // _id: string;
  id: string;
  username: string;
  name: string;
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
  interactions:{
    [interactionId:string]: Interaction;
  };
  transaction:{
    withRoleId: number, //交易对象,-1表示没有交易
    myTrans: {
      Type: 'clue' | 'usable', //clue,usable
      transactionId: number, //交易品id
      amount: number
    }[],
    oppositeTrans: {
      Type: 'clue' | 'usable',
      transactionId: number,
      amount: number
    }[],
    isStarter: boolean //是否为交易发起者
  };
}

export interface PlayerDocument {
  _id: string;
  content: string;
  stage: number;
  Type: "pic" | "text"
}

export type propId = number;
export interface Prop {
  id: propId;
  name: string;
  value: number;
  specialType: "none" //暂定
}

export type clueId =number;
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

export type usableId = number;
export interface Usable extends Element{
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
  id: number;//从0开始递增
  title: string;
  subtitle: string;
  choices: {
    _id: number; //从0开始递增
    text: string
  }[];
}

export type placeId =number;
export interface Place {
  // id: placeId;
  name: string;
  description: string;
  costAp: number;
  surveySuccPsb: number;
}


/* Interaction */

export type interactionId = string;
export interface Interaction {
  id: interactionId;
  title: string;
  subtitle: string;
  fromRoleId: roleId;
  options: {
    id: number;
    text: string;
  }[];
}
