//@flow
import EntityBase from './entityBase';
import PurchaseStatus from './PurchaseStatus';
import CostCenter from './CostCenter';
import JobFunction from './JobFunction';

export class PurchaseTemplate extends EntityBase {
  name: string;
  shortDescription: string;
  comments: string;
  header: string;
  footer: string;
  defaultStatus: PurchaseStatus;
  costCenter: CostCenter;
  jobFunction: JobFunction;

  static fromApiEntity(apiPurchaseTemplate:PurchaseTemplateType): PurchaseTemplate {
    let purchaseTemplate = new PurchaseTemplate();
    purchaseTemplate.id = apiPurchaseTemplate.id;
    purchaseTemplate.name = apiPurchaseTemplate.name;
    purchaseTemplate.shortDescription = apiPurchaseTemplate.shortDescription;
    purchaseTemplate.comments = apiPurchaseTemplate.comments;
    purchaseTemplate.header = apiPurchaseTemplate.header;
    purchaseTemplate.footer = apiPurchaseTemplate.footer;
    if (apiPurchaseTemplate.defaultStatus) purchaseTemplate.defaultStatus = PurchaseStatus.fromApiEntity(apiPurchaseTemplate.defaultStatus);
    if (apiPurchaseTemplate.costCenter) purchaseTemplate.costCenter = CostCenter.fromApiEntity(apiPurchaseTemplate.costCenter);
    if (apiPurchaseTemplate.jobFunction) purchaseTemplate.jobFunction = JobFunction.fromApiEntity(apiPurchaseTemplate.jobFunction);

    return purchaseTemplate;
  }
}

export default PurchaseTemplate;

export type PurchaseTemplateType = {
  id: number,
  name: string;
  shortDescription: string;
  comments: string;
  header: string;
  footer: string;
  defaultStatus: PurchaseStatus;
  costCenter: CostCenter;
  jobFunction: JobFunction;
}

