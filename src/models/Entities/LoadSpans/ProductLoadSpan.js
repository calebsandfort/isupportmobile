//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import AssetTypeLoadSpan from './AssetTypeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ProductLoadSpan extends LoadSpanBase {
  name: boolean;
  description: boolean;
  availableToEUD: boolean;
  allowPartialQuantities: boolean;
  assetType: AssetTypeLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.description = false;
    this.availableToEUD = false;
    this.allowPartialQuantities = false;
  }

  get assetTypeLoadSpan(): AssetTypeLoadSpan {
    if(!this.assetType){
		this.assetType = new AssetTypeLoadSpan();
	}

    return this.assetType;
  }

  loadAllProperties() {
    this.name = true;
    this.description = true;
    this.availableToEUD = true;
    this.allowPartialQuantities = true;
  }
}

export default ProductLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
