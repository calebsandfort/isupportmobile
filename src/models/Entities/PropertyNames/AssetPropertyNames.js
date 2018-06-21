//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ConfigurationItemPropertyNames from './ConfigurationItemPropertyNames';
import AssetTypePropertyNames from './AssetTypePropertyNames';
import AssetRDBIntegrationDefinitionPropertyNames from './AssetRDBIntegrationDefinitionPropertyNames';
import InventoryAssetPropertyNames from './InventoryAssetPropertyNames';
import RuleGroupPropertyNames from './RuleGroupPropertyNames';

class AssetPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get guid (): string {
    return super.resolvePropertyName("Guid");
  }
  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get manufacturer (): string {
    return super.resolvePropertyName("Manufacturer");
  }
  get model (): string {
    return super.resolvePropertyName("Model");
  }
  get location (): string {
    return super.resolvePropertyName("Location");
  }
  get tagNumber (): string {
    return super.resolvePropertyName("TagNumber");
  }
  get serialNumber (): string {
    return super.resolvePropertyName("SerialNumber");
  }
  get purchaseDate (): string {
    return super.resolvePropertyName("PurchaseDate");
  }
  get warrantyEndDate (): string {
    return super.resolvePropertyName("WarrantyEndDate");
  }
  get maintenanceEndDate (): string {
    return super.resolvePropertyName("MaintenanceEndDate");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
  }
  get unitCount (): string {
    return super.resolvePropertyName("UnitCount");
  }
  get unitLabel (): string {
    return super.resolvePropertyName("UnitLabel");
  }
  get itemCostPrice (): string {
    return super.resolvePropertyName("ItemCostPrice");
  }
  get itemListPrice (): string {
    return super.resolvePropertyName("ItemListPrice");
  }
  get source (): string {
    return super.resolvePropertyName("Source");
  }
  get associatedConfigurationItem (): ConfigurationItemPropertyNames {
    return new ConfigurationItemPropertyNames(super.resolvePropertyName("AssociatedConfigurationItem"));
  }
  get type (): AssetTypePropertyNames {
    return new AssetTypePropertyNames(super.resolvePropertyName("Type"));
  }
  get rDBIntegrationDefinition (): AssetRDBIntegrationDefinitionPropertyNames {
    return new AssetRDBIntegrationDefinitionPropertyNames(super.resolvePropertyName("RDBIntegrationDefinition"));
  }
  get inventoryAsset (): InventoryAssetPropertyNames {
    return new InventoryAssetPropertyNames(super.resolvePropertyName("InventoryAsset"));
  }
  get staticEffectiveRuleGroup (): RuleGroupPropertyNames {
    return new RuleGroupPropertyNames(super.resolvePropertyName("StaticEffectiveRuleGroup"));
  }
}

export default AssetPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
