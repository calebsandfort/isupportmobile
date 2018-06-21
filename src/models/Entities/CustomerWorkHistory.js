//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class CustomerWorkHistory extends EntityBase {
  createdDate: string;
  entry: string;
  incidentNumber: string;
  isSystemCreated: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiCustomerWorkHistory:CustomerWorkHistoryType): CustomerWorkHistory {
    let customerWorkHistory = new CustomerWorkHistory();
    customerWorkHistory.id = apiCustomerWorkHistory.id;
    customerWorkHistory.createdDate = apiCustomerWorkHistory.createdDate;
    customerWorkHistory.entry = apiCustomerWorkHistory.entry;
    customerWorkHistory.incidentNumber = apiCustomerWorkHistory.incidentNumber;
    customerWorkHistory.isSystemCreated = apiCustomerWorkHistory.isSystemCreated;
    if (apiCustomerWorkHistory.owner) customerWorkHistory.owner = SupportRepresentative.fromApiEntity(apiCustomerWorkHistory.owner);
    if (apiCustomerWorkHistory.customerOwner) customerWorkHistory.customerOwner = Customer.fromApiEntity(apiCustomerWorkHistory.customerOwner);

    return customerWorkHistory;
  }
}

export default CustomerWorkHistory;

export type CustomerWorkHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  incidentNumber: string;
  isSystemCreated: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

