//@flow
import EntityBase from './entityBase';

export class SmsCarrier extends EntityBase {
  name: string;
  emailAddress: string;

  static fromApiEntity(apiSmsCarrier:SmsCarrierType): SmsCarrier {
    let smsCarrier = new SmsCarrier();
    smsCarrier.id = apiSmsCarrier.id;
    smsCarrier.name = apiSmsCarrier.name;
    smsCarrier.emailAddress = apiSmsCarrier.emailAddress;

    return smsCarrier;
  }
}

export default SmsCarrier;

export type SmsCarrierType = {
  id: number,
  name: string;
  emailAddress: string;
}

