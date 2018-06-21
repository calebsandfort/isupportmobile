//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import PurchasePropertyNames from './PurchasePropertyNames';

class PurchaseWorkflowGroupPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get workflowGroupGuid (): string {
    return super.resolvePropertyName("WorkflowGroupGuid");
  }
  get purchase (): PurchasePropertyNames {
    return new PurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
}

export default PurchaseWorkflowGroupPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
