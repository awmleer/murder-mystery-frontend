export class RoomBrief {
  _id:string;
  roomStage:string;
  gameTemplateId:string;
  name:string;
}

export class RoomInfo extends RoomBrief{

}

export class RoomList {
  [_id:string]:RoomBrief;
}
