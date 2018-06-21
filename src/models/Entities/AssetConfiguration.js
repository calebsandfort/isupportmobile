//@flow
import EntityBase from './entityBase';

export class AssetConfiguration extends EntityBase {
  enabledDatabaseValue: string;

  static fromApiEntity(apiAssetConfiguration:AssetConfigurationType): AssetConfiguration {
    let assetConfiguration = new AssetConfiguration();
    assetConfiguration.id = apiAssetConfiguration.id;
    assetConfiguration.enabledDatabaseValue = apiAssetConfiguration.enabledDatabaseValue;

    return assetConfiguration;
  }
}

export default AssetConfiguration;

export type AssetConfigurationType = {
  id: number,
  enabledDatabaseValue: string;
}

