//@flow
import EntityBase from './entityBase';

export class LinkedInIntegrationInfo extends EntityBase {
  apiKey: string;
  secretKey: string;

  static fromApiEntity(apiLinkedInIntegrationInfo:LinkedInIntegrationInfoType): LinkedInIntegrationInfo {
    let linkedInIntegrationInfo = new LinkedInIntegrationInfo();
    linkedInIntegrationInfo.id = apiLinkedInIntegrationInfo.id;
    linkedInIntegrationInfo.apiKey = apiLinkedInIntegrationInfo.apiKey;
    linkedInIntegrationInfo.secretKey = apiLinkedInIntegrationInfo.secretKey;

    return linkedInIntegrationInfo;
  }
}

export default LinkedInIntegrationInfo;

export type LinkedInIntegrationInfoType = {
  id: number,
  apiKey: string;
  secretKey: string;
}

