export class GameBrief {
  _id:string;
  name:string;
  picUri:string;
}

export class GameInfo {
  _id: string;
  name: string;
  picUri: string;
  stages: {
    _id: number,
    name: string,
    description: string,
    mode: string,
    duration: number,
    isVote: false,
    canSurvey: true,
    canSkill: true,
    canItem: true,
    canTrade: true
  }[];
  places: {
    _id: number,
    name: string,
    description: string,
    costAp: number
  }[];
  roles: {
    _id: number,
    name: string,
    necessary: false,
    picture: string,
    avatar: string,
    description: string,
    costAp: number,
    placesCanSurveyId: [
      number
      ]
  }[];
  playersNum: {
    min: number,
    max: number
  };
}
