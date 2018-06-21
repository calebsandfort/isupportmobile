//@flow
import EntityBase from './entityBase';

export class AssetDeletionShadow extends EntityBase {
  name: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiAssetDeletionShadow:AssetDeletionShadowType): AssetDeletionShadow {
    let assetDeletionShadow = new AssetDeletionShadow();
    assetDeletionShadow.id = apiAssetDeletionShadow.id;
    assetDeletionShadow.name = apiAssetDeletionShadow.name;
    assetDeletionShadow.dateDeleted = apiAssetDeletionShadow.dateDeleted;
    assetDeletionShadow.deletedBy = apiAssetDeletionShadow.deletedBy;
    assetDeletionShadow.originalIdentifier = apiAssetDeletionShadow.originalIdentifier;

    return assetDeletionShadow;
  }
}

export default AssetDeletionShadow;

export type AssetDeletionShadowType = {
  id: number,
  name: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

