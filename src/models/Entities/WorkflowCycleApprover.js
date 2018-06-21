//@flow
import EntityBase from './entityBase';
import WorkflowApprovalCycle from './WorkflowApprovalCycle';
import Customer from './Customer';
import SupportRepresentative from './SupportRepresentative';
import {ApprovalStatus} from './Enums';

export class WorkflowCycleApprover extends EntityBase {
  status: ApprovalStatus;
  workflowApprovalCycle: WorkflowApprovalCycle;
  customer: Customer;
  rep: SupportRepresentative;

  static fromApiEntity(apiWorkflowCycleApprover:WorkflowCycleApproverType): WorkflowCycleApprover {
    let workflowCycleApprover = new WorkflowCycleApprover();
    workflowCycleApprover.id = apiWorkflowCycleApprover.id;
    workflowCycleApprover.status = ApprovalStatus.enumOrdinalOf(parseInt(apiWorkflowCycleApprover.status, 10));
    if (apiWorkflowCycleApprover.workflowApprovalCycle) workflowCycleApprover.workflowApprovalCycle = WorkflowApprovalCycle.fromApiEntity(apiWorkflowCycleApprover.workflowApprovalCycle);
    if (apiWorkflowCycleApprover.customer) workflowCycleApprover.customer = Customer.fromApiEntity(apiWorkflowCycleApprover.customer);
    if (apiWorkflowCycleApprover.rep) workflowCycleApprover.rep = SupportRepresentative.fromApiEntity(apiWorkflowCycleApprover.rep);

    return workflowCycleApprover;
  }
}

export default WorkflowCycleApprover;

export type WorkflowCycleApproverType = {
  id: number,
  status: ApprovalStatus;
  workflowApprovalCycle: WorkflowApprovalCycle;
  customer: Customer;
  rep: SupportRepresentative;
}

