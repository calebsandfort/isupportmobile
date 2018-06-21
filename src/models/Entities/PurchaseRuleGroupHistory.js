//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class PurchaseRuleGroupHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiPurchaseRuleGroupHistory:PurchaseRuleGroupHistoryType): PurchaseRuleGroupHistory {
    let purchaseRuleGroupHistory = new PurchaseRuleGroupHistory();
    purchaseRuleGroupHistory.id = apiPurchaseRuleGroupHistory.id;
    purchaseRuleGroupHistory.createdDate = apiPurchaseRuleGroupHistory.createdDate;
    purchaseRuleGroupHistory.entry = apiPurchaseRuleGroupHistory.entry;
    if (apiPurchaseRuleGroupHistory.owner) purchaseRuleGroupHistory.owner = SupportRepresentative.fromApiEntity(apiPurchaseRuleGroupHistory.owner);

    return purchaseRuleGroupHistory;
  }
}

export default PurchaseRuleGroupHistory;

export type PurchaseRuleGroupHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

