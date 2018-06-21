//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ConfigurationItemTypeLoadSpan from './ConfigurationItemTypeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import AssetLoadSpan from './AssetLoadSpan';

export class ConfigurationItemLoadSpan {
  name: boolean;
  description: boolean;
  type: ConfigurationItemTypeLoadSpan;
  primaryCustomerOwner: CustomerLoadSpan;
  primaryRepOwner: SupportRepresentativeLoadSpan;
  associatedAsset: AssetLoadSpan;

  constructor(){
    this.name = false;
    this.description = false;
  }

  get typeLoadSpan(): ConfigurationItemTypeLoadSpan {
    if(!this.type){
		this.type = new ConfigurationItemTypeLoadSpan();
	}

    return this.type;
  }

  get primaryCustomerOwnerLoadSpan(): CustomerLoadSpan {
    if(!this.primaryCustomerOwner){
		this.primaryCustomerOwner = new CustomerLoadSpan();
	}

    return this.primaryCustomerOwner;
  }

  get primaryRepOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.primaryRepOwner){
		this.primaryRepOwner = new SupportRepresentativeLoadSpan();
	}

    return this.primaryRepOwner;
  }

  get associatedAssetLoadSpan(): AssetLoadSpan {
    if(!this.associatedAsset){
		this.associatedAsset = new AssetLoadSpan();
	}

    return this.associatedAsset;
  }

  loadAllProperties() {
    this.name = true;
    this.description = true;
  }
}

export default ConfigurationItemLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
