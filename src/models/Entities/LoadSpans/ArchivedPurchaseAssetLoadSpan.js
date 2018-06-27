//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseLoadSpan from './ArchivedPurchaseLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedPurchaseAssetLoadSpan extends LoadSpanBase {
  tagNumber: boolean;
  type: boolean;
  location: boolean;
  name: boolean;
  owner: boolean;
  purchase: ArchivedPurchaseLoadSpan;

  constructor(){
    super();
    this.tagNumber = false;
    this.type = false;
    this.location = false;
    this.name = false;
    this.owner = false;
  }

  get purchaseLoadSpan(): ArchivedPurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new ArchivedPurchaseLoadSpan();
	}

    return this.purchase;
  }

  loadAllProperties() {
    this.tagNumber = true;
    this.type = true;
    this.location = true;
    this.name = true;
    this.owner = true;
  }
}

export default ArchivedPurchaseAssetLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
