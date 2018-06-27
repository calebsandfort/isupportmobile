//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import WorkflowApprovalCycleLoadSpan from './WorkflowApprovalCycleLoadSpan';
import IncidentApprovalHistoryLoadSpan from './IncidentApprovalHistoryLoadSpan';
import ChangeApprovalHistoryLoadSpan from './ChangeApprovalHistoryLoadSpan';
import PurchaseApprovalHistoryLoadSpan from './PurchaseApprovalHistoryLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class WorkflowApprovalCycleHistoryLoadSpan extends LoadSpanBase {
  isAfter: boolean;
  synopsis: boolean;
  workflowApprovalCycle: WorkflowApprovalCycleLoadSpan;
  incidentApprovalHistoryEntry: IncidentApprovalHistoryLoadSpan;
  changeApprovalHistoryEntry: ChangeApprovalHistoryLoadSpan;
  purchaseApprovalHistoryEntry: PurchaseApprovalHistoryLoadSpan;

  constructor(){
    super();
    this.isAfter = false;
    this.synopsis = false;
  }

  get workflowApprovalCycleLoadSpan(): WorkflowApprovalCycleLoadSpan {
    if(!this.workflowApprovalCycle){
		this.workflowApprovalCycle = new WorkflowApprovalCycleLoadSpan();
	}

    return this.workflowApprovalCycle;
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
    this.isAfter = true;
    this.synopsis = true;
  }
}

export default WorkflowApprovalCycleHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
