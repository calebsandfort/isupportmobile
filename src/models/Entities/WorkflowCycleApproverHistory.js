//@flow
import EntityBase from './entityBase';
import WorkflowCycleApprover from './WorkflowCycleApprover';
import IncidentApprovalHistory from './IncidentApprovalHistory';
import ChangeApprovalHistory from './ChangeApprovalHistory';
import PurchaseApprovalHistory from './PurchaseApprovalHistory';

export class WorkflowCycleApproverHistory extends EntityBase {
  synopsis: string;
  workflowCycleApprover: WorkflowCycleApprover;
  incidentApprovalHistoryEntry: IncidentApprovalHistory;
  changeApprovalHistoryEntry: ChangeApprovalHistory;
  purchaseApprovalHistoryEntry: PurchaseApprovalHistory;

  static fromApiEntity(apiWorkflowCycleApproverHistory:WorkflowCycleApproverHistoryType): WorkflowCycleApproverHistory {
    let workflowCycleApproverHistory = new WorkflowCycleApproverHistory();
    workflowCycleApproverHistory.id = apiWorkflowCycleApproverHistory.id;
    workflowCycleApproverHistory.synopsis = apiWorkflowCycleApproverHistory.synopsis;
    if (apiWorkflowCycleApproverHistory.workflowCycleApprover) workflowCycleApproverHistory.workflowCycleApprover = WorkflowCycleApprover.fromApiEntity(apiWorkflowCycleApproverHistory.workflowCycleApprover);
    if (apiWorkflowCycleApproverHistory.incidentApprovalHistoryEntry) workflowCycleApproverHistory.incidentApprovalHistoryEntry = IncidentApprovalHistory.fromApiEntity(apiWorkflowCycleApproverHistory.incidentApprovalHistoryEntry);
    if (apiWorkflowCycleApproverHistory.changeApprovalHistoryEntry) workflowCycleApproverHistory.changeApprovalHistoryEntry = ChangeApprovalHistory.fromApiEntity(apiWorkflowCycleApproverHistory.changeApprovalHistoryEntry);
    if (apiWorkflowCycleApproverHistory.purchaseApprovalHistoryEntry) workflowCycleApproverHistory.purchaseApprovalHistoryEntry = PurchaseApprovalHistory.fromApiEntity(apiWorkflowCycleApproverHistory.purchaseApprovalHistoryEntry);

    return workflowCycleApproverHistory;
  }
}

export default WorkflowCycleApproverHistory;

export type WorkflowCycleApproverHistoryType = {
  id: number,
  synopsis: string;
  workflowCycleApprover: WorkflowCycleApprover;
  incidentApprovalHistoryEntry: IncidentApprovalHistory;
  changeApprovalHistoryEntry: ChangeApprovalHistory;
  purchaseApprovalHistoryEntry: PurchaseApprovalHistory;
}

