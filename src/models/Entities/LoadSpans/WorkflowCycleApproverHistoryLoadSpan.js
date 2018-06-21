//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import WorkflowCycleApproverLoadSpan from './WorkflowCycleApproverLoadSpan';
import IncidentApprovalHistoryLoadSpan from './IncidentApprovalHistoryLoadSpan';
import ChangeApprovalHistoryLoadSpan from './ChangeApprovalHistoryLoadSpan';
import PurchaseApprovalHistoryLoadSpan from './PurchaseApprovalHistoryLoadSpan';

export class WorkflowCycleApproverHistoryLoadSpan {
  synopsis: boolean;
  workflowCycleApprover: WorkflowCycleApproverLoadSpan;
  incidentApprovalHistoryEntry: IncidentApprovalHistoryLoadSpan;
  changeApprovalHistoryEntry: ChangeApprovalHistoryLoadSpan;
  purchaseApprovalHistoryEntry: PurchaseApprovalHistoryLoadSpan;

  constructor(){
    this.synopsis = false;
  }

  get workflowCycleApproverLoadSpan(): WorkflowCycleApproverLoadSpan {
    if(!this.workflowCycleApprover){
		this.workflowCycleApprover = new WorkflowCycleApproverLoadSpan();
	}

    return this.workflowCycleApprover;
  }

  get incidentApprovalHistoryEntryLoadSpan(): IncidentApprovalHistoryLoadSpan {
    if(!this.incidentApprovalHistoryEntry){
		this.incidentApprovalHistoryEntry = new IncidentApprovalHistoryLoadSpan();
	}

    return this.incidentApprovalHistoryEntry;
  }

  get changeApprovalHistoryEntryLoadSpan(): ChangeApprovalHistoryLoadSpan {
    if(!this.changeApprovalHistoryEntry){
		this.changeApprovalHistoryEntry = new ChangeApprovalHistoryLoadSpan();
	}

    return this.changeApprovalHistoryEntry;
  }

  get purchaseApprovalHistoryEntryLoadSpan(): PurchaseApprovalHistoryLoadSpan {
    if(!this.purchaseApprovalHistoryEntry){
		this.purchaseApprovalHistoryEntry = new PurchaseApprovalHistoryLoadSpan();
	}

    return this.purchaseApprovalHistoryEntry;
  }

  loadAllProperties() {
    this.synopsis = true;
  }
}

export default WorkflowCycleApproverHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
