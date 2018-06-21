//@flow
import EntityBase from './entityBase';

export class FacebookIntegrationInfo extends EntityBase {
  appId: string;
  appSecret: string;

  static fromApiEntity(apiFacebookIntegrationInfo:FacebookIntegrationInfoType): FacebookIntegrationInfo {
    let facebookIntegrationInfo = new FacebookIntegrationInfo();
    facebookIntegrationInfo.id = apiFacebookIntegrationInfo.id;
    facebookIntegrationInfo.appId = apiFacebookIntegrationInfo.appId;
    facebookIntegrationInfo.appSecret = apiFacebookIntegrationInfo.appSecret;

    return facebookIntegrationInfo;
  }
}

export default FacebookIntegrationInfo;

export type FacebookIntegrationInfoType = {
  id: number,
  appId: string;
  appSecret: string;
}

