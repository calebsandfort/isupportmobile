//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import WorkflowApprovalCyclePropertyNames from './WorkflowApprovalCyclePropertyNames';
import IncidentApprovalHistoryPropertyNames from './IncidentApprovalHistoryPropertyNames';
import ChangeApprovalHistoryPropertyNames from './ChangeApprovalHistoryPropertyNames';
import PurchaseApprovalHistoryPropertyNames from './PurchaseApprovalHistoryPropertyNames';

class WorkflowApprovalCycleHistoryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get isAfter (): string {
    return super.resolvePropertyName("IsAfter");
  }
  get synopsis (): string {
    return super.resolvePropertyName("Synopsis");
  }
  get workflowApprovalCycle (): WorkflowApprovalCyclePropertyNames {
    return new WorkflowApprovalCyclePropertyNames(super.resolvePropertyName("WorkflowApprovalCycle"));
  }
  get incidentApprovalHistoryEntry (): IncidentApprovalHistoryPropertyNames {
    return new IncidentApprovalHistoryPropertyNames(super.resolvePropertyName("IncidentApprovalHistoryEntry"));
  }
  get changeApprovalHistoryEntry (): ChangeApprovalHistoryPropertyNames {
    return new ChangeApprovalHistoryPropertyNames(super.resolvePropertyName("ChangeApprovalHistoryEntry"));
  }
  get purchaseApprovalHistoryEntry (): PurchaseApprovalHistoryPropertyNames {
    return new PurchaseApprovalHistoryPropertyNames(super.resolvePropertyName("PurchaseApprovalHistoryEntry"));
  }
}

export default WorkflowApprovalCycleHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
