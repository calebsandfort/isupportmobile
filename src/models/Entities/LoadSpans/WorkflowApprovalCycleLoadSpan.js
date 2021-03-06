//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ApprovalCycleLoadSpan from './ApprovalCycleLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class WorkflowApprovalCycleLoadSpan extends LoadSpanBase {
  workflowGroupGuid: boolean;
  status: boolean;
  approvalCycle: ApprovalCycleLoadSpan;

  constructor(){
    super();
    this.workflowGroupGuid = false;
    this.status = false;
  }

  get approvalCycleLoadSpan(): ApprovalCycleLoadSpan {
    if(!this.approvalCycle){
		this.approvalCycle = new ApprovalCycleLoadSpan();
	}

    return this.approvalCycle;
  }

  loadAllProperties() {
    this.workflowGroupGuid = true;
    this.status = true;
  }
}

export default WorkflowApprovalCycleLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
