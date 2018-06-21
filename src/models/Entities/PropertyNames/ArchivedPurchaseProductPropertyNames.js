//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedPurchasePropertyNames from './ArchivedPurchasePropertyNames';

class ArchivedPurchaseProductPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get vendor (): string {
    return super.resolvePropertyName("Vendor");
  }
  get product (): string {
    return super.resolvePropertyName("Product");
  }
  get quantity (): string {
    return super.resolvePropertyName("Quantity");
  }
  get quantityReceieved (): string {
    return super.resolvePropertyName("QuantityReceieved");
  }
  get rate (): string {
    return super.resolvePropertyName("Rate");
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
  get purchase (): ArchivedPurchasePropertyNames {
    return new ArchivedPurchasePropertyNames(super.resolvePropertyName("Purchase"));
  }
}

export default ArchivedPurchaseProductPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
