//@flow
import EntityBase from './entityBase';
import {PurchaseStatusTypes} from './Enums';

export class PurchaseStatus extends EntityBase {
  label: string;
  position: string;
  eudLabel: string;
  type: PurchaseStatusTypes;

  static fromApiEntity(apiPurchaseStatus:PurchaseStatusType): PurchaseStatus {
    let purchaseStatus = new PurchaseStatus();
    purchaseStatus.id = apiPurchaseStatus.id;
    purchaseStatus.label = apiPurchaseStatus.label;
    purchaseStatus.position = apiPurchaseStatus.position;
    purchaseStatus.eudLabel = apiPurchaseStatus.eudLabel;
    purchaseStatus.type = PurchaseStatusTypes.enumOrdinalOf(parseInt(apiPurchaseStatus.type, 10));

    return purchaseStatus;
  }
}

export default PurchaseStatus;

export type PurchaseStatusType = {
  id: number,
  label: string;
  position: string;
  eudLabel: string;
  type: PurchaseStatusTypes;
}

