//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class ChangeAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  changeNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiChangeAuditHistory:ChangeAuditHistoryType): ChangeAuditHistory {
    let changeAuditHistory = new ChangeAuditHistory();
    changeAuditHistory.id = apiChangeAuditHistory.id;
    changeAuditHistory.createdDate = apiChangeAuditHistory.createdDate;
    changeAuditHistory.entry = apiChangeAuditHistory.entry;
    changeAuditHistory.changeNumber = apiChangeAuditHistory.changeNumber;
    if (apiChangeAuditHistory.owner) changeAuditHistory.owner = SupportRepresentative.fromApiEntity(apiChangeAuditHistory.owner);
    if (apiChangeAuditHistory.customerOwner) changeAuditHistory.customerOwner = Customer.fromApiEntity(apiChangeAuditHistory.customerOwner);

    return changeAuditHistory;
  }
}

export default ChangeAuditHistory;

export type ChangeAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  changeNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

