//@flow
import EntityBase from './entityBase';
import ArchivedPurchase from './ArchivedPurchase';

export class ArchivedPurchaseCustomField extends EntityBase {
  value: string;
  label: string;
  purchase: ArchivedPurchase;

  static fromApiEntity(apiArchivedPurchaseCustomField:ArchivedPurchaseCustomFieldType): ArchivedPurchaseCustomField {
    let archivedPurchaseCustomField = new ArchivedPurchaseCustomField();
    archivedPurchaseCustomField.id = apiArchivedPurchaseCustomField.id;
    archivedPurchaseCustomField.value = apiArchivedPurchaseCustomField.value;
    archivedPurchaseCustomField.label = apiArchivedPurchaseCustomField.label;
    if (apiArchivedPurchaseCustomField.purchase) archivedPurchaseCustomField.purchase = ArchivedPurchase.fromApiEntity(apiArchivedPurchaseCustomField.purchase);

    return archivedPurchaseCustomField;
  }
}

export default ArchivedPurchaseCustomField;

export type ArchivedPurchaseCustomFieldType = {
  id: number,
  value: string;
  label: string;
  purchase: ArchivedPurchase;
}

