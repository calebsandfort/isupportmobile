//@flow
import EntityBase from './entityBase';
import WorkflowApprovalCycle from './WorkflowApprovalCycle';
import IncidentApprovalHistory from './IncidentApprovalHistory';
import ChangeApprovalHistory from './ChangeApprovalHistory';
import PurchaseApprovalHistory from './PurchaseApprovalHistory';

export class WorkflowApprovalCycleHistory extends EntityBase {
  isAfter: string;
  synopsis: string;
  workflowApprovalCycle: WorkflowApprovalCycle;
  incidentApprovalHistoryEntry: IncidentApprovalHistory;
  changeApprovalHistoryEntry: ChangeApprovalHistory;
  purchaseApprovalHistoryEntry: PurchaseApprovalHistory;

  static fromApiEntity(apiWorkflowApprovalCycleHistory:WorkflowApprovalCycleHistoryType): WorkflowApprovalCycleHistory {
    let workflowApprovalCycleHistory = new WorkflowApprovalCycleHistory();
    workflowApprovalCycleHistory.id = apiWorkflowApprovalCycleHistory.id;
    workflowApprovalCycleHistory.isAfter = apiWorkflowApprovalCycleHistory.isAfter;
    workflowApprovalCycleHistory.synopsis = apiWorkflowApprovalCycleHistory.synopsis;
    if (apiWorkflowApprovalCycleHistory.workflowApprovalCycle) workflowApprovalCycleHistory.workflowApprovalCycle = WorkflowApprovalCycle.fromApiEntity(apiWorkflowApprovalCycleHistory.workflowApprovalCycle);
    if (apiWorkflowApprovalCycleHistory.incidentApprovalHistoryEntry) workflowApprovalCycleHistory.incidentApprovalHistoryEntry = IncidentApprovalHistory.fromApiEntity(apiWorkflowApprovalCycleHistory.incidentApprovalHistoryEntry);
    if (apiWorkflowApprovalCycleHistory.changeApprovalHistoryEntry) workflowApprovalCycleHistory.changeApprovalHistoryEntry = ChangeApprovalHistory.fromApiEntity(apiWorkflowApprovalCycleHistory.changeApprovalHistoryEntry);
    if (apiWorkflowApprovalCycleHistory.purchaseApprovalHistoryEntry) workflowApprovalCycleHistory.purchaseApprovalHistoryEntry = PurchaseApprovalHistory.fromApiEntity(apiWorkflowApprovalCycleHistory.purchaseApprovalHistoryEntry);

    return workflowApprovalCycleHistory;
  }
}

export default WorkflowApprovalCycleHistory;

export type WorkflowApprovalCycleHistoryType = {
  id: number,
  isAfter: string;
  synopsis: string;
  workflowApprovalCycle: WorkflowApprovalCycle;
  incidentApprovalHistoryEntry: IncidentApprovalHistory;
  changeApprovalHistoryEntry: ChangeApprovalHistory;
  purchaseApprovalHistoryEntry: PurchaseApprovalHistory;
}

