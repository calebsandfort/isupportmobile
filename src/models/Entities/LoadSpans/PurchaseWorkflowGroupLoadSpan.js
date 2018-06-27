//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PurchaseLoadSpan from './PurchaseLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class PurchaseWorkflowGroupLoadSpan extends LoadSpanBase {
  workflowGroupGuid: boolean;
  purchase: PurchaseLoadSpan;

  constructor(){
    super();
    this.workflowGroupGuid = false;
  }

  get purchaseLoadSpan(): PurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new PurchaseLoadSpan();
	}

    return this.purchase;
  }

  loadAllProperties() {
    this.workflowGroupGuid = true;
  }
}

export default PurchaseWorkflowGroupLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
