//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import PurchasePropertyNames from './PurchasePropertyNames';
import VendorProductPropertyNames from './VendorProductPropertyNames';

class PurchaseProductPropertyNames extends PropertyNamesBase {
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
  get quantityReceived (): string {
    return super.resolvePropertyName("QuantityReceived");
  }
  get createAssetRecordUponReceipt (): string {
    return super.resolvePropertyName("CreateAssetRecordUponReceipt");
  }
  get deliveryDate (): string {
    return super.resolvePropertyName("DeliveryDate");
  }
  get expectedDate (): string {
    return super.resolvePropertyName("ExpectedDate");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
  }
  get purchase (): PurchasePropertyNames {
    return new PurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
  get vendorProduct (): VendorProductPropertyNames {
    return new VendorProductPropertyNames(super.resolvePropertyName("VendorProduct"));
  }
}

export default PurchaseProductPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
