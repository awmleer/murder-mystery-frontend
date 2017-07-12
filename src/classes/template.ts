import {placeId, roleId, stageId, uri, usableId} from "./model";

export class GameTemplate {
  name:string;
  picUri:string;
  playersNum: {
    min: number;
    max: number;
  };
  usables:UsableTemplate[];
  clues: ClueTemplate[];
  places: PlaceTemplate[];
  stages: StageTemplate[];
  roles: RoleTemplate[];
  surveyMode: "random" | "inOrder";
}

export class UsableTemplate {
  _id:number;
  name: string;
  uri: uri;
  cd: number;
  category: string;
  target: "self" | "chosenUser" | roleId;
  consumable: boolean;
  description: string;
}

export class ClueTemplate {
  _id: number;
  name: string;
  Type: string;
  content: string;
  description: string;
  usables:{
    usableId: usableId;
  }[];

}

export class PlaceTemplate {
  _id: placeId;
  name: string;
  description: string;
  costAp: number;
  surveySuccPsb: number;
}

export class StageTemplate {
  _id: stageId;
  name: string;
  description: string;
  mode: "fillForm" | "public" | "singleForm" | "countDown" | "allConfirmed" | "countDownWithConfirm" | "singleConfirm" | "inOrder" | "normal";
  duration: number;
  allQuestions:QuestionTemplate[];
  vote:{
    optionalRolesId: roleId[];
    description: string;
  };
  singleFormOptionalRolesId: roleId[];
  focusRoleId: roleId;
  canSurvey: boolean;
  canSkill: boolean;
  canItem: boolean;
  canTrade: boolean;
}

export class QuestionTemplate {
  _id: number;
  question: string;
  choices:{
    _id: number;
    text: string;
  }
}

export class RoleTemplate {
  _id: roleId;
  name: string;
  necessary: boolean;
  picture: uri;
  avatar: uri;
  description: string;
  initProps: {
    _id: number;
    name: string;
    value: number;
    specialType: string;
  }[];
  placesCanSurveyId: placeId[];
}

