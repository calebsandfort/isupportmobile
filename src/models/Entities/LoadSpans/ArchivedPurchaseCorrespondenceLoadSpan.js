//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseLoadSpan from './ArchivedPurchaseLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ArchivedPurchaseCorrespondenceLoadSpan extends LoadSpanBase {
  dateMessage: boolean;
  subject: boolean;
  priority: boolean;
  from: boolean;
  body: boolean;
  rep: boolean;
  purchase: ArchivedPurchaseLoadSpan;

  constructor(){
    super();
    this.dateMessage = false;
    this.subject = false;
    this.priority = false;
    this.from = false;
    this.body = false;
    this.rep = false;
  }

  get purchaseLoadSpan(): ArchivedPurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new ArchivedPurchaseLoadSpan();
	}

    return this.purchase;
  }

  loadAllProperties() {
    this.dateMessage = true;
    this.subject = true;
    this.priority = true;
    this.from = true;
    this.body = true;
    this.rep = true;
  }
}

export default ArchivedPurchaseCorrespondenceLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
