//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import PurchaseStatusPropertyNames from './PurchaseStatusPropertyNames';
import CostCenterPropertyNames from './CostCenterPropertyNames';
import JobFunctionPropertyNames from './JobFunctionPropertyNames';

class PurchaseTemplatePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get shortDescription (): string {
    return super.resolvePropertyName("ShortDescription");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
  }
  get header (): string {
    return super.resolvePropertyName("Header");
  }
  get footer (): string {
    return super.resolvePropertyName("Footer");
  }
  get defaultStatus (): PurchaseStatusPropertyNames {
    return new PurchaseStatusPropertyNames(super.resolvePropertyName("DefaultStatus"));
  }
  get costCenter (): CostCenterPropertyNames {
    return new CostCenterPropertyNames(super.resolvePropertyName("CostCenter"));
  }
  get jobFunction (): JobFunctionPropertyNames {
    return new JobFunctionPropertyNames(super.resolvePropertyName("JobFunction"));
  }
}

export default PurchaseTemplatePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
