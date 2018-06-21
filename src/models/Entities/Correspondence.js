//@flow
import EntityBase from './entityBase';
import Customer from './Customer';

export class Correspondence extends EntityBase {
  sent: string;
  body: string;
  guid: string;
  customer: Customer;

  static fromApiEntity(apiCorrespondence:CorrespondenceType): Correspondence {
    let correspondence = new Correspondence();
    correspondence.id = apiCorrespondence.id;
    correspondence.sent = apiCorrespondence.sent;
    correspondence.body = apiCorrespondence.body;
    correspondence.guid = apiCorrespondence.guid;
    if (apiCorrespondence.customer) correspondence.customer = Customer.fromApiEntity(apiCorrespondence.customer);

    return correspondence;
  }
}

export default Correspondence;

export type CorrespondenceType = {
  id: number,
  sent: string;
  body: string;
  guid: string;
  customer: Customer;
}

