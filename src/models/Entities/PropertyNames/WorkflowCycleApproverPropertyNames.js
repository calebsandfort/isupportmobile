//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import WorkflowApprovalCyclePropertyNames from './WorkflowApprovalCyclePropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';

class WorkflowCycleApproverPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get status (): string {
    return super.resolvePropertyName("Status");
  }
  get workflowApprovalCycle (): WorkflowApprovalCyclePropertyNames {
    return new WorkflowApprovalCyclePropertyNames(super.resolvePropertyName("WorkflowApprovalCycle"));
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get rep (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Rep"));
  }
}

export default WorkflowCycleApproverPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
