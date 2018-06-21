//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class PurchaseCorrespondenceHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiPurchaseCorrespondenceHistory:PurchaseCorrespondenceHistoryType): PurchaseCorrespondenceHistory {
    let purchaseCorrespondenceHistory = new PurchaseCorrespondenceHistory();
    purchaseCorrespondenceHistory.id = apiPurchaseCorrespondenceHistory.id;
    purchaseCorrespondenceHistory.createdDate = apiPurchaseCorrespondenceHistory.createdDate;
    purchaseCorrespondenceHistory.entry = apiPurchaseCorrespondenceHistory.entry;
    if (apiPurchaseCorrespondenceHistory.owner) purchaseCorrespondenceHistory.owner = SupportRepresentative.fromApiEntity(apiPurchaseCorrespondenceHistory.owner);

    return purchaseCorrespondenceHistory;
  }
}

export default PurchaseCorrespondenceHistory;

export type PurchaseCorrespondenceHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

