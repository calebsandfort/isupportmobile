//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class ChangeCustomerWorkHistory extends EntityBase {
  createdDate: string;
  entry: string;
  changeNumber: string;
  isSystemCreated: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiChangeCustomerWorkHistory:ChangeCustomerWorkHistoryType): ChangeCustomerWorkHistory {
    let changeCustomerWorkHistory = new ChangeCustomerWorkHistory();
    changeCustomerWorkHistory.id = apiChangeCustomerWorkHistory.id;
    changeCustomerWorkHistory.createdDate = apiChangeCustomerWorkHistory.createdDate;
    changeCustomerWorkHistory.entry = apiChangeCustomerWorkHistory.entry;
    changeCustomerWorkHistory.changeNumber = apiChangeCustomerWorkHistory.changeNumber;
    changeCustomerWorkHistory.isSystemCreated = apiChangeCustomerWorkHistory.isSystemCreated;
    if (apiChangeCustomerWorkHistory.owner) changeCustomerWorkHistory.owner = SupportRepresentative.fromApiEntity(apiChangeCustomerWorkHistory.owner);
    if (apiChangeCustomerWorkHistory.customerOwner) changeCustomerWorkHistory.customerOwner = Customer.fromApiEntity(apiChangeCustomerWorkHistory.customerOwner);

    return changeCustomerWorkHistory;
  }
}

export default ChangeCustomerWorkHistory;

export type ChangeCustomerWorkHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  changeNumber: string;
  isSystemCreated: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

