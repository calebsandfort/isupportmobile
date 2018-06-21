//@flow
import EntityBase from './entityBase';
import {AssetNotificationRecipient} from './Enums';
import {AssetTypeOptionalFields} from './Enums';

export class AssetType extends EntityBase {
  type: string;
  isPcAsset: string;
  customFieldCollectionID: string;
  trackWarranty: string;
  trackMaintenance: string;
  isInventoryType: string;
  maintenanceWhoToNotify: AssetNotificationRecipient;
  warrantyWhoToNotify: AssetNotificationRecipient;
  lowUnitWhoToNotify: AssetNotificationRecipient;
  optionalFields: AssetTypeOptionalFields;

  static fromApiEntity(apiAssetType:AssetTypeType): AssetType {
    let assetType = new AssetType();
    assetType.id = apiAssetType.id;
    assetType.type = apiAssetType.type;
    assetType.isPcAsset = apiAssetType.isPcAsset;
    assetType.customFieldCollectionID = apiAssetType.customFieldCollectionID;
    assetType.trackWarranty = apiAssetType.trackWarranty;
    assetType.trackMaintenance = apiAssetType.trackMaintenance;
    assetType.isInventoryType = apiAssetType.isInventoryType;
    assetType.maintenanceWhoToNotify = AssetNotificationRecipient.enumOrdinalOf(parseInt(apiAssetType.maintenanceWhoToNotify, 10));
    assetType.warrantyWhoToNotify = AssetNotificationRecipient.enumOrdinalOf(parseInt(apiAssetType.warrantyWhoToNotify, 10));
    assetType.lowUnitWhoToNotify = AssetNotificationRecipient.enumOrdinalOf(parseInt(apiAssetType.lowUnitWhoToNotify, 10));
    assetType.optionalFields = AssetTypeOptionalFields.enumOrdinalOf(parseInt(apiAssetType.optionalFields, 10));

    return assetType;
  }
}

export default AssetType;

export type AssetTypeType = {
  id: number,
  type: string;
  isPcAsset: string;
  customFieldCollectionID: string;
  trackWarranty: string;
  trackMaintenance: string;
  isInventoryType: string;
  maintenanceWhoToNotify: AssetNotificationRecipient;
  warrantyWhoToNotify: AssetNotificationRecipient;
  lowUnitWhoToNotify: AssetNotificationRecipient;
  optionalFields: AssetTypeOptionalFields;
}
