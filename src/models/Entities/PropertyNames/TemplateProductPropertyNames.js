//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import PurchaseTemplatePropertyNames from './PurchaseTemplatePropertyNames';
import VendorProductPropertyNames from './VendorProductPropertyNames';

class TemplateProductPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get rate (): string {
    return super.resolvePropertyName("Rate");
  }
  get quantity (): string {
    return super.resolvePropertyName("Quantity");
  }
  get createAssetRecordUponReceipt (): string {
    return super.resolvePropertyName("CreateAssetRecordUponReceipt");
  }
  get deliveryDateInterval (): string {
    return super.resolvePropertyName("DeliveryDateInterval");
  }
  get expectedDateInterval (): string {
    return super.resolvePropertyName("ExpectedDateInterval");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
  }
  get template (): PurchaseTemplatePropertyNames {
    return new PurchaseTemplatePropertyNames(super.resolvePropertyName("Template"));
  }
  get vendorProduct (): VendorProductPropertyNames {
    return new VendorProductPropertyNames(super.resolvePropertyName("VendorProduct"));
  }
}

export default TemplateProductPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
