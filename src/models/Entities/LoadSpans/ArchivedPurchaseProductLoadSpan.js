//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ArchivedPurchaseLoadSpan from './ArchivedPurchaseLoadSpan';

export class ArchivedPurchaseProductLoadSpan {
  vendor: boolean;
  product: boolean;
  quantity: boolean;
  quantityReceieved: boolean;
  rate: boolean;
  deliveryDate: boolean;
  expectedDate: boolean;
  comments: boolean;
  purchase: ArchivedPurchaseLoadSpan;

  constructor(){
    this.vendor = false;
    this.product = false;
    this.quantity = false;
    this.quantityReceieved = false;
    this.rate = false;
    this.deliveryDate = false;
    this.expectedDate = false;
    this.comments = false;
  }

  get purchaseLoadSpan(): ArchivedPurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new ArchivedPurchaseLoadSpan();
	}

    return this.purchase;
  }

  loadAllProperties() {
    this.vendor = true;
    this.product = true;
    this.quantity = true;
    this.quantityReceieved = true;
    this.rate = true;
    this.deliveryDate = true;
    this.expectedDate = true;
    this.comments = true;
  }
}

export default ArchivedPurchaseProductLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
