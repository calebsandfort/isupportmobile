//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ConfigurationItemTypePropertyNames from './ConfigurationItemTypePropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import AssetPropertyNames from './AssetPropertyNames';

class ConfigurationItemPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get type (): ConfigurationItemTypePropertyNames {
    return new ConfigurationItemTypePropertyNames(super.resolvePropertyName("Type"));
  }
  get primaryCustomerOwner (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("PrimaryCustomerOwner"));
  }
  get primaryRepOwner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("PrimaryRepOwner"));
  }
  get associatedAsset (): AssetPropertyNames {
    return new AssetPropertyNames(super.resolvePropertyName("AssociatedAsset"));
  }
}

export default ConfigurationItemPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
