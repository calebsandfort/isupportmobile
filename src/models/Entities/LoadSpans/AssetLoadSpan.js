//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ConfigurationItemLoadSpan from './ConfigurationItemLoadSpan';
import AssetTypeLoadSpan from './AssetTypeLoadSpan';
import AssetRDBIntegrationDefinitionLoadSpan from './AssetRDBIntegrationDefinitionLoadSpan';
import InventoryAssetLoadSpan from './InventoryAssetLoadSpan';
import RuleGroupLoadSpan from './RuleGroupLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class AssetLoadSpan extends LoadSpanBase {
  guid: boolean;
  name: boolean;
  manufacturer: boolean;
  model: boolean;
  location: boolean;
  tagNumber: boolean;
  serialNumber: boolean;
  purchaseDate: boolean;
  warrantyEndDate: boolean;
  maintenanceEndDate: boolean;
  comments: boolean;
  unitCount: boolean;
  unitLabel: boolean;
  itemCostPrice: boolean;
  itemListPrice: boolean;
  source: boolean;
  associatedConfigurationItem: ConfigurationItemLoadSpan;
  type: AssetTypeLoadSpan;
  rDBIntegrationDefinition: AssetRDBIntegrationDefinitionLoadSpan;
  inventoryAsset: InventoryAssetLoadSpan;
  staticEffectiveRuleGroup: RuleGroupLoadSpan;

  constructor(){
    super();
    this.guid = false;
    this.name = false;
    this.manufacturer = false;
    this.model = false;
    this.location = false;
    this.tagNumber = false;
    this.serialNumber = false;
    this.purchaseDate = false;
    this.warrantyEndDate = false;
    this.maintenanceEndDate = false;
    this.comments = false;
    this.unitCount = false;
    this.unitLabel = false;
    this.itemCostPrice = false;
    this.itemListPrice = false;
    this.source = false;
  }

  get associatedConfigurationItemLoadSpan(): ConfigurationItemLoadSpan {
    if(!this.associatedConfigurationItem){
		this.associatedConfigurationItem = new ConfigurationItemLoadSpan();
	}

    return this.associatedConfigurationItem;
  }

  get typeLoadSpan(): AssetTypeLoadSpan {
    if(!this.type){
		this.type = new AssetTypeLoadSpan();
	}

    return this.type;
  }

  get rDBIntegrationDefinitionLoadSpan(): AssetRDBIntegrationDefinitionLoadSpan {
    if(!this.rDBIntegrationDefinition){
		this.rDBIntegrationDefinition = new AssetRDBIntegrationDefinitionLoadSpan();
	}

    return this.rDBIntegrationDefinition;
  }

  get inventoryAssetLoadSpan(): InventoryAssetLoadSpan {
    if(!this.inventoryAsset){
		this.inventoryAsset = new InventoryAssetLoadSpan();
	}

    return this.inventoryAsset;
  }

  get staticEffectiveRuleGroupLoadSpan(): RuleGroupLoadSpan {
    if(!this.staticEffectiveRuleGroup){
		this.staticEffectiveRuleGroup = new RuleGroupLoadSpan();
	}

    return this.staticEffectiveRuleGroup;
  }

  loadAllProperties() {
    this.guid = true;
    this.name = true;
    this.manufacturer = true;
    this.model = true;
    this.location = true;
    this.tagNumber = true;
    this.serialNumber = true;
    this.purchaseDate = true;
    this.warrantyEndDate = true;
    this.maintenanceEndDate = true;
    this.comments = true;
    this.unitCount = true;
    this.unitLabel = true;
    this.itemCostPrice = true;
    this.itemListPrice = true;
    this.source = true;
  }
}

export default AssetLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
