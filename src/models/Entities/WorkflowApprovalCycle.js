//@flow
import EntityBase from './entityBase';
import ApprovalCycle from './ApprovalCycle';
import {ApprovalStatus} from './Enums';

export class WorkflowApprovalCycle extends EntityBase {
  workflowGroupGuid: string;
  status: ApprovalStatus;
  approvalCycle: ApprovalCycle;

  static fromApiEntity(apiWorkflowApprovalCycle:WorkflowApprovalCycleType): WorkflowApprovalCycle {
    let workflowApprovalCycle = new WorkflowApprovalCycle();
    workflowApprovalCycle.id = apiWorkflowApprovalCycle.id;
    workflowApprovalCycle.workflowGroupGuid = apiWorkflowApprovalCycle.workflowGroupGuid;
    workflowApprovalCycle.status = ApprovalStatus.enumOrdinalOf(parseInt(apiWorkflowApprovalCycle.status, 10));
    if (apiWorkflowApprovalCycle.approvalCycle) workflowApprovalCycle.approvalCycle = ApprovalCycle.fromApiEntity(apiWorkflowApprovalCycle.approvalCycle);

    return workflowApprovalCycle;
  }
}

export default WorkflowApprovalCycle;

export type WorkflowApprovalCycleType = {
  id: number,
  workflowGroupGuid: string;
  status: ApprovalStatus;
  approvalCycle: ApprovalCycle;
}

