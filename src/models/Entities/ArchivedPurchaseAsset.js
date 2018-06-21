//@flow
import EntityBase from './entityBase';
import ArchivedPurchase from './ArchivedPurchase';

export class ArchivedPurchaseAsset extends EntityBase {
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  purchase: ArchivedPurchase;

  static fromApiEntity(apiArchivedPurchaseAsset:ArchivedPurchaseAssetType): ArchivedPurchaseAsset {
    let archivedPurchaseAsset = new ArchivedPurchaseAsset();
    archivedPurchaseAsset.id = apiArchivedPurchaseAsset.id;
    archivedPurchaseAsset.tagNumber = apiArchivedPurchaseAsset.tagNumber;
    archivedPurchaseAsset.type = apiArchivedPurchaseAsset.type;
    archivedPurchaseAsset.location = apiArchivedPurchaseAsset.location;
    archivedPurchaseAsset.name = apiArchivedPurchaseAsset.name;
    archivedPurchaseAsset.owner = apiArchivedPurchaseAsset.owner;
    if (apiArchivedPurchaseAsset.purchase) archivedPurchaseAsset.purchase = ArchivedPurchase.fromApiEntity(apiArchivedPurchaseAsset.purchase);

    return archivedPurchaseAsset;
  }
}

export default ArchivedPurchaseAsset;

export type ArchivedPurchaseAssetType = {
  id: number,
  tagNumber: string;
  type: string;
  location: string;
  name: string;
  owner: string;
  purchase: ArchivedPurchase;
}

