//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class ChangeApprovalHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiChangeApprovalHistory:ChangeApprovalHistoryType): ChangeApprovalHistory {
    let changeApprovalHistory = new ChangeApprovalHistory();
    changeApprovalHistory.id = apiChangeApprovalHistory.id;
    changeApprovalHistory.createdDate = apiChangeApprovalHistory.createdDate;
    changeApprovalHistory.entry = apiChangeApprovalHistory.entry;
    if (apiChangeApprovalHistory.owner) changeApprovalHistory.owner = SupportRepresentative.fromApiEntity(apiChangeApprovalHistory.owner);
    if (apiChangeApprovalHistory.customerOwner) changeApprovalHistory.customerOwner = Customer.fromApiEntity(apiChangeApprovalHistory.customerOwner);

    return changeApprovalHistory;
  }
}

export default ChangeApprovalHistory;

export type ChangeApprovalHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

