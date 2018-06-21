//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Customer from './Customer';

export class PurchaseCustomerWorkHistory extends EntityBase {
  createdDate: string;
  entry: string;
  purchaseNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;

  static fromApiEntity(apiPurchaseCustomerWorkHistory:PurchaseCustomerWorkHistoryType): PurchaseCustomerWorkHistory {
    let purchaseCustomerWorkHistory = new PurchaseCustomerWorkHistory();
    purchaseCustomerWorkHistory.id = apiPurchaseCustomerWorkHistory.id;
    purchaseCustomerWorkHistory.createdDate = apiPurchaseCustomerWorkHistory.createdDate;
    purchaseCustomerWorkHistory.entry = apiPurchaseCustomerWorkHistory.entry;
    purchaseCustomerWorkHistory.purchaseNumber = apiPurchaseCustomerWorkHistory.purchaseNumber;
    if (apiPurchaseCustomerWorkHistory.owner) purchaseCustomerWorkHistory.owner = SupportRepresentative.fromApiEntity(apiPurchaseCustomerWorkHistory.owner);
    if (apiPurchaseCustomerWorkHistory.customerOwner) purchaseCustomerWorkHistory.customerOwner = Customer.fromApiEntity(apiPurchaseCustomerWorkHistory.customerOwner);

    return purchaseCustomerWorkHistory;
  }
}

export default PurchaseCustomerWorkHistory;

export type PurchaseCustomerWorkHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  purchaseNumber: string;
  owner: SupportRepresentative;
  customerOwner: Customer;
}

