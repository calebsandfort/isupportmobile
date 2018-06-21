//@flow
import EntityBase from './entityBase';

export class PurchaseDeletionShadow extends EntityBase {
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiPurchaseDeletionShadow:PurchaseDeletionShadowType): PurchaseDeletionShadow {
    let purchaseDeletionShadow = new PurchaseDeletionShadow();
    purchaseDeletionShadow.id = apiPurchaseDeletionShadow.id;
    purchaseDeletionShadow.number = apiPurchaseDeletionShadow.number;
    purchaseDeletionShadow.dateDeleted = apiPurchaseDeletionShadow.dateDeleted;
    purchaseDeletionShadow.deletedBy = apiPurchaseDeletionShadow.deletedBy;
    purchaseDeletionShadow.originalIdentifier = apiPurchaseDeletionShadow.originalIdentifier;

    return purchaseDeletionShadow;
  }
}

export default PurchaseDeletionShadow;

export type PurchaseDeletionShadowType = {
  id: number,
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

