//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseLoadSpan from './ArchivedPurchaseLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedPurchaseCustomFieldLoadSpan extends LoadSpanBase {
  value: boolean;
  label: boolean;
  purchase: ArchivedPurchaseLoadSpan;

  constructor(){
    super();
    this.value = false;
    this.label = false;
  }

  get purchaseLoadSpan(): ArchivedPurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new ArchivedPurchaseLoadSpan();
	}

    return this.purchase;
  }

  loadAllProperties() {
    this.value = true;
    this.label = true;
  }
}

export default ArchivedPurchaseCustomFieldLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
