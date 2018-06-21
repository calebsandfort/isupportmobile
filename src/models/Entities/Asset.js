//@flow
import EntityBase from './entityBase';
import ConfigurationItem from './ConfigurationItem';
import AssetType from './AssetType';
import AssetRDBIntegrationDefinition from './AssetRDBIntegrationDefinition';
import InventoryAsset from './InventoryAsset';
import RuleGroup from './RuleGroup';
import {AssetSource} from './Enums';

export class Asset extends EntityBase {
  guid: string;
  name: string;
  manufacturer: string;
  model: string;
  location: string;
  tagNumber: string;
  serialNumber: string;
  purchaseDate: string;
  warrantyEndDate: string;
  maintenanceEndDate: string;
  comments: string;
  unitCount: string;
  unitLabel: string;
  itemCostPrice: string;
  itemListPrice: string;
  source: AssetSource;
  associatedConfigurationItem: ConfigurationItem;
  type: AssetType;
  rDBIntegrationDefinition: AssetRDBIntegrationDefinition;
  inventoryAsset: InventoryAsset;
  staticEffectiveRuleGroup: RuleGroup;

  static fromApiEntity(apiAsset:AssetEntityType): Asset {
    let asset = new Asset();
    asset.id = apiAsset.id;
    asset.guid = apiAsset.guid;
    asset.name = apiAsset.name;
    asset.manufacturer = apiAsset.manufacturer;
    asset.model = apiAsset.model;
    asset.location = apiAsset.location;
    asset.tagNumber = apiAsset.tagNumber;
    asset.serialNumber = apiAsset.serialNumber;
    asset.purchaseDate = apiAsset.purchaseDate;
    asset.warrantyEndDate = apiAsset.warrantyEndDate;
    asset.maintenanceEndDate = apiAsset.maintenanceEndDate;
    asset.comments = apiAsset.comments;
    asset.unitCount = apiAsset.unitCount;
    asset.unitLabel = apiAsset.unitLabel;
    asset.itemCostPrice = apiAsset.itemCostPrice;
    asset.itemListPrice = apiAsset.itemListPrice;
    asset.source = AssetSource.enumOrdinalOf(parseInt(apiAsset.source, 10));
    if (apiAsset.associatedConfigurationItem) asset.associatedConfigurationItem = ConfigurationItem.fromApiEntity(apiAsset.associatedConfigurationItem);
    if (apiAsset.type) asset.type = AssetType.fromApiEntity(apiAsset.type);
    if (apiAsset.rDBIntegrationDefinition) asset.rDBIntegrationDefinition = AssetRDBIntegrationDefinition.fromApiEntity(apiAsset.rDBIntegrationDefinition);
    if (apiAsset.inventoryAsset) asset.inventoryAsset = InventoryAsset.fromApiEntity(apiAsset.inventoryAsset);
    if (apiAsset.staticEffectiveRuleGroup) asset.staticEffectiveRuleGroup = RuleGroup.fromApiEntity(apiAsset.staticEffectiveRuleGroup);

    return asset;
  }
}

export default Asset;

export type AssetEntityType = {
  id: number,
  guid: string;
  name: string;
  manufacturer: string;
  model: string;
  location: string;
  tagNumber: string;
  serialNumber: string;
  purchaseDate: string;
  warrantyEndDate: string;
  maintenanceEndDate: string;
  comments: string;
  unitCount: string;
  unitLabel: string;
  itemCostPrice: string;
  itemListPrice: string;
  source: AssetSource;
  associatedConfigurationItem: ConfigurationItem;
  type: AssetType;
  rDBIntegrationDefinition: AssetRDBIntegrationDefinition;
  inventoryAsset: InventoryAsset;
  staticEffectiveRuleGroup: RuleGroup;
}
