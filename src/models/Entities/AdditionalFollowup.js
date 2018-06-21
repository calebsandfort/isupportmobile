//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class AdditionalFollowup extends EntityBase {
  date: string;
  note: string;
  rep: SupportRepresentative;
  customer: Customer;

  static fromApiEntity(apiAdditionalFollowup:AdditionalFollowupType): AdditionalFollowup {
    let additionalFollowup = new AdditionalFollowup();
    additionalFollowup.id = apiAdditionalFollowup.id;
    additionalFollowup.date = apiAdditionalFollowup.date;
    additionalFollowup.note = apiAdditionalFollowup.note;
    if (apiAdditionalFollowup.rep) additionalFollowup.rep = SupportRepresentative.fromApiEntity(apiAdditionalFollowup.rep);
    if (apiAdditionalFollowup.customer) additionalFollowup.customer = Customer.fromApiEntity(apiAdditionalFollowup.customer);

    return additionalFollowup;
  }
}

export default AdditionalFollowup;

export type AdditionalFollowupType = {
  id: number,
  date: string;
  note: string;
  rep: SupportRepresentative;
  customer: Customer;
}

