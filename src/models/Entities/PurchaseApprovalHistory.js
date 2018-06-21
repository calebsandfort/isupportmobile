//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class PurchaseApprovalHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiPurchaseApprovalHistory:PurchaseApprovalHistoryType): PurchaseApprovalHistory {
    let purchaseApprovalHistory = new PurchaseApprovalHistory();
    purchaseApprovalHistory.id = apiPurchaseApprovalHistory.id;
    purchaseApprovalHistory.createdDate = apiPurchaseApprovalHistory.createdDate;
    purchaseApprovalHistory.entry = apiPurchaseApprovalHistory.entry;
    if (apiPurchaseApprovalHistory.owner) purchaseApprovalHistory.owner = SupportRepresentative.fromApiEntity(apiPurchaseApprovalHistory.owner);
    if (apiPurchaseApprovalHistory.customerOwner) purchaseApprovalHistory.customerOwner = Customer.fromApiEntity(apiPurchaseApprovalHistory.customerOwner);

    return purchaseApprovalHistory;
  }
}

export default PurchaseApprovalHistory;

export type PurchaseApprovalHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

