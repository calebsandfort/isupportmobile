//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class PurchaseAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  purchaseNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiPurchaseAuditHistory:PurchaseAuditHistoryType): PurchaseAuditHistory {
    let purchaseAuditHistory = new PurchaseAuditHistory();
    purchaseAuditHistory.id = apiPurchaseAuditHistory.id;
    purchaseAuditHistory.createdDate = apiPurchaseAuditHistory.createdDate;
    purchaseAuditHistory.entry = apiPurchaseAuditHistory.entry;
    purchaseAuditHistory.purchaseNumber = apiPurchaseAuditHistory.purchaseNumber;
    if (apiPurchaseAuditHistory.owner) purchaseAuditHistory.owner = SupportRepresentative.fromApiEntity(apiPurchaseAuditHistory.owner);
    if (apiPurchaseAuditHistory.customerOwner) purchaseAuditHistory.customerOwner = Customer.fromApiEntity(apiPurchaseAuditHistory.customerOwner);

    return purchaseAuditHistory;
  }
}

export default PurchaseAuditHistory;

export type PurchaseAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  purchaseNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

