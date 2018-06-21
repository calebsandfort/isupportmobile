//@flow
import EntityBase from './entityBase';

export class TwitterIntegrationInfo extends EntityBase {
  availableToRepDesktop: string;
  screenName: string;
  consumerKey: string;
  consumerSecret: string;
  accessTokenKey: string;
  accessTokenSecret: string;

  static fromApiEntity(apiTwitterIntegrationInfo:TwitterIntegrationInfoType): TwitterIntegrationInfo {
    let twitterIntegrationInfo = new TwitterIntegrationInfo();
    twitterIntegrationInfo.id = apiTwitterIntegrationInfo.id;
    twitterIntegrationInfo.availableToRepDesktop = apiTwitterIntegrationInfo.availableToRepDesktop;
    twitterIntegrationInfo.screenName = apiTwitterIntegrationInfo.screenName;
    twitterIntegrationInfo.consumerKey = apiTwitterIntegrationInfo.consumerKey;
    twitterIntegrationInfo.consumerSecret = apiTwitterIntegrationInfo.consumerSecret;
    twitterIntegrationInfo.accessTokenKey = apiTwitterIntegrationInfo.accessTokenKey;
    twitterIntegrationInfo.accessTokenSecret = apiTwitterIntegrationInfo.accessTokenSecret;

    return twitterIntegrationInfo;
  }
}

export default TwitterIntegrationInfo;

export type TwitterIntegrationInfoType = {
  id: number,
  availableToRepDesktop: string;
  screenName: string;
  consumerKey: string;
  consumerSecret: string;
  accessTokenKey: string;
  accessTokenSecret: string;
}

