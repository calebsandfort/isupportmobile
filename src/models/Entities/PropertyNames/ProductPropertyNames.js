//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import AssetTypePropertyNames from './AssetTypePropertyNames';

class ProductPropertyNames extends PropertyNamesBase {
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
  get availableToEUD (): string {
    return super.resolvePropertyName("AvailableToEUD");
  }
  get allowPartialQuantities (): string {
    return super.resolvePropertyName("AllowPartialQuantities");
  }
  get assetType (): AssetTypePropertyNames {
    return new AssetTypePropertyNames(super.resolvePropertyName("AssetType"));
  }
}

export default ProductPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
