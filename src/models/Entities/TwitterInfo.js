//@flow
import EntityBase from './entityBase';

export class TwitterInfo extends EntityBase {
  screenName: string;
  activationCode: string;
  activated: string;

  static fromApiEntity(apiTwitterInfo:TwitterInfoType): TwitterInfo {
    let twitterInfo = new TwitterInfo();
    twitterInfo.id = apiTwitterInfo.id;
    twitterInfo.screenName = apiTwitterInfo.screenName;
    twitterInfo.activationCode = apiTwitterInfo.activationCode;
    twitterInfo.activated = apiTwitterInfo.activated;

    return twitterInfo;
  }
}

export default TwitterInfo;

export type TwitterInfoType = {
  id: number,
  screenName: string;
  activationCode: string;
  activated: string;
}

