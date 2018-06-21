//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import WorkflowCycleApproverPropertyNames from './WorkflowCycleApproverPropertyNames';
import IncidentApprovalHistoryPropertyNames from './IncidentApprovalHistoryPropertyNames';
import ChangeApprovalHistoryPropertyNames from './ChangeApprovalHistoryPropertyNames';
import PurchaseApprovalHistoryPropertyNames from './PurchaseApprovalHistoryPropertyNames';

class WorkflowCycleApproverHistoryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get synopsis (): string {
    return super.resolvePropertyName("Synopsis");
  }
  get workflowCycleApprover (): WorkflowCycleApproverPropertyNames {
    return new WorkflowCycleApproverPropertyNames(super.resolvePropertyName("WorkflowCycleApprover"));
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

export default WorkflowCycleApproverHistoryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
