//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class PurchaseRepChatHistory extends EntityBase {
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;

  static fromApiEntity(apiPurchaseRepChatHistory:PurchaseRepChatHistoryType): PurchaseRepChatHistory {
    let purchaseRepChatHistory = new PurchaseRepChatHistory();
    purchaseRepChatHistory.id = apiPurchaseRepChatHistory.id;
    purchaseRepChatHistory.createdDate = apiPurchaseRepChatHistory.createdDate;
    purchaseRepChatHistory.entry = apiPurchaseRepChatHistory.entry;
    purchaseRepChatHistory.isFromSystem = apiPurchaseRepChatHistory.isFromSystem;
    if (apiPurchaseRepChatHistory.owner) purchaseRepChatHistory.owner = SupportRepresentative.fromApiEntity(apiPurchaseRepChatHistory.owner);
    if (apiPurchaseRepChatHistory.recipient) purchaseRepChatHistory.recipient = SupportRepresentative.fromApiEntity(apiPurchaseRepChatHistory.recipient);

    return purchaseRepChatHistory;
  }
}

export default PurchaseRepChatHistory;

export type PurchaseRepChatHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  isFromSystem: string;
  owner: SupportRepresentative;
  recipient: SupportRepresentative;
}

