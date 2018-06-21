//@flow
import EntityBase from './entityBase';

export class SmsInfo extends EntityBase {
  address: string;
  activationCode: string;
  activated: string;

  static fromApiEntity(apiSmsInfo:SmsInfoType): SmsInfo {
    let smsInfo = new SmsInfo();
    smsInfo.id = apiSmsInfo.id;
    smsInfo.address = apiSmsInfo.address;
    smsInfo.activationCode = apiSmsInfo.activationCode;
    smsInfo.activated = apiSmsInfo.activated;

    return smsInfo;
  }
}

export default SmsInfo;

export type SmsInfoType = {
  id: number,
  address: string;
  activationCode: string;
  activated: string;
}

