//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import WorkflowApprovalCycleLoadSpan from './WorkflowApprovalCycleLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class WorkflowCycleApproverLoadSpan extends LoadSpanBase {
  status: boolean;
  workflowApprovalCycle: WorkflowApprovalCycleLoadSpan;
  customer: CustomerLoadSpan;
  rep: SupportRepresentativeLoadSpan;

  constructor(){
    super();
    this.status = false;
  }

  get workflowApprovalCycleLoadSpan(): WorkflowApprovalCycleLoadSpan {
    if(!this.workflowApprovalCycle){
		this.workflowApprovalCycle = new WorkflowApprovalCycleLoadSpan();
	}

    return this.workflowApprovalCycle;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get repLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.rep){
		this.rep = new SupportRepresentativeLoadSpan();
	}

    return this.rep;
  }

  loadAllProperties() {
    this.status = true;
  }
}

export default WorkflowCycleApproverLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
