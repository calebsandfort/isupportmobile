//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Asset from './Asset';

export class AssetAuditHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  asset: Asset;

  static fromApiEntity(apiAssetAuditHistory:AssetAuditHistoryType): AssetAuditHistory {
    let assetAuditHistory = new AssetAuditHistory();
    assetAuditHistory.id = apiAssetAuditHistory.id;
    assetAuditHistory.createdDate = apiAssetAuditHistory.createdDate;
    assetAuditHistory.entry = apiAssetAuditHistory.entry;
    if (apiAssetAuditHistory.owner) assetAuditHistory.owner = SupportRepresentative.fromApiEntity(apiAssetAuditHistory.owner);
    if (apiAssetAuditHistory.asset) assetAuditHistory.asset = Asset.fromApiEntity(apiAssetAuditHistory.asset);

    return assetAuditHistory;
  }
}

export default AssetAuditHistory;

export type AssetAuditHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
  asset: Asset;
}

