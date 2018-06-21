//@flow
import EntityBase from './entityBase';
import Purchase from './Purchase';

export class PurchaseWorkflowGroup extends EntityBase {
  workflowGroupGuid: string;
  purchase: Purchase;

  static fromApiEntity(apiPurchaseWorkflowGroup:PurchaseWorkflowGroupType): PurchaseWorkflowGroup {
    let purchaseWorkflowGroup = new PurchaseWorkflowGroup();
    purchaseWorkflowGroup.id = apiPurchaseWorkflowGroup.id;
    purchaseWorkflowGroup.workflowGroupGuid = apiPurchaseWorkflowGroup.workflowGroupGuid;
    if (apiPurchaseWorkflowGroup.purchase) purchaseWorkflowGroup.purchase = Purchase.fromApiEntity(apiPurchaseWorkflowGroup.purchase);

    return purchaseWorkflowGroup;
  }
}

export default PurchaseWorkflowGroup;

export type PurchaseWorkflowGroupType = {
  id: number,
  workflowGroupGuid: string;
  purchase: Purchase;
}

