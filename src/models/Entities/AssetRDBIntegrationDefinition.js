//@flow
import EntityBase from './entityBase';

export class AssetRDBIntegrationDefinition extends EntityBase {
  label: string;
  mapAssetOwner: string;
  mappedColumns: string;
  active: string;

  static fromApiEntity(apiAssetRDBIntegrationDefinition:AssetRDBIntegrationDefinitionType): AssetRDBIntegrationDefinition {
    let assetRDBIntegrationDefinition = new AssetRDBIntegrationDefinition();
    assetRDBIntegrationDefinition.id = apiAssetRDBIntegrationDefinition.id;
    assetRDBIntegrationDefinition.label = apiAssetRDBIntegrationDefinition.label;
    assetRDBIntegrationDefinition.mapAssetOwner = apiAssetRDBIntegrationDefinition.mapAssetOwner;
    assetRDBIntegrationDefinition.mappedColumns = apiAssetRDBIntegrationDefinition.mappedColumns;
    assetRDBIntegrationDefinition.active = apiAssetRDBIntegrationDefinition.active;

    return assetRDBIntegrationDefinition;
  }
}

export default AssetRDBIntegrationDefinition;

export type AssetRDBIntegrationDefinitionType = {
  id: number,
  label: string;
  mapAssetOwner: string;
  mappedColumns: string;
  active: string;
}

