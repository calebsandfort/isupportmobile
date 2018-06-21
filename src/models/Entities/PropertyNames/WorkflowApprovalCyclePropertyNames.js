//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ApprovalCyclePropertyNames from './ApprovalCyclePropertyNames';

class WorkflowApprovalCyclePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get workflowGroupGuid (): string {
    return super.resolvePropertyName("WorkflowGroupGuid");
  }
  get status (): string {
    return super.resolvePropertyName("Status");
  }
  get approvalCycle (): ApprovalCyclePropertyNames {
    return new ApprovalCyclePropertyNames(super.resolvePropertyName("ApprovalCycle"));
  }
}

export default WorkflowApprovalCyclePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
