//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PurchaseLoadSpan from './PurchaseLoadSpan';

export class PurchaseWorkflowGroupLoadSpan {
  workflowGroupGuid: boolean;
  purchase: PurchaseLoadSpan;

  constructor(){
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
