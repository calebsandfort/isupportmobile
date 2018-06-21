//@flow
import EntityBase from './entityBase';
import ConfigurationItemType from './ConfigurationItemType';
import Customer from './Customer';
import SupportRepresentative from './SupportRepresentative';
import Asset from './Asset';

export class ConfigurationItem extends EntityBase {
  name: string;
  description: string;
  type: ConfigurationItemType;
  primaryCustomerOwner: Customer;
  primaryRepOwner: SupportRepresentative;
  associatedAsset: Asset;

  static fromApiEntity(apiConfigurationItem:ConfigurationItemEntityType): ConfigurationItem {
    let configurationItem = new ConfigurationItem();
    configurationItem.id = apiConfigurationItem.id;
    configurationItem.name = apiConfigurationItem.name;
    configurationItem.description = apiConfigurationItem.description;
    if (apiConfigurationItem.type) configurationItem.type = ConfigurationItemType.fromApiEntity(apiConfigurationItem.type);
    if (apiConfigurationItem.primaryCustomerOwner) configurationItem.primaryCustomerOwner = Customer.fromApiEntity(apiConfigurationItem.primaryCustomerOwner);
    if (apiConfigurationItem.primaryRepOwner) configurationItem.primaryRepOwner = SupportRepresentative.fromApiEntity(apiConfigurationItem.primaryRepOwner);
    if (apiConfigurationItem.associatedAsset) configurationItem.associatedAsset = Asset.fromApiEntity(apiConfigurationItem.associatedAsset);

    return configurationItem;
  }
}

export default ConfigurationItem;

export type ConfigurationItemEntityType = {
  id: number,
  name: string;
  description: string;
  type: ConfigurationItemType;
  primaryCustomerOwner: Customer;
  primaryRepOwner: SupportRepresentative;
  associatedAsset: Asset;
}
