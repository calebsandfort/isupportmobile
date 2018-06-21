//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class AssetRuleGroupHistory extends EntityBase {
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;

  static fromApiEntity(apiAssetRuleGroupHistory:AssetRuleGroupHistoryType): AssetRuleGroupHistory {
    let assetRuleGroupHistory = new AssetRuleGroupHistory();
    assetRuleGroupHistory.id = apiAssetRuleGroupHistory.id;
    assetRuleGroupHistory.createdDate = apiAssetRuleGroupHistory.createdDate;
    assetRuleGroupHistory.entry = apiAssetRuleGroupHistory.entry;
    if (apiAssetRuleGroupHistory.owner) assetRuleGroupHistory.owner = SupportRepresentative.fromApiEntity(apiAssetRuleGroupHistory.owner);

    return assetRuleGroupHistory;
  }
}

export default AssetRuleGroupHistory;

export type AssetRuleGroupHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
  owner: SupportRepresentative;
}

