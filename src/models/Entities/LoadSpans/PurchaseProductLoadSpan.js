//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PurchaseLoadSpan from './PurchaseLoadSpan';
import VendorProductLoadSpan from './VendorProductLoadSpan';

export class PurchaseProductLoadSpan {
  rate: boolean;
  quantity: boolean;
  quantityReceived: boolean;
  createAssetRecordUponReceipt: boolean;
  deliveryDate: boolean;
  expectedDate: boolean;
  comments: boolean;
  purchase: PurchaseLoadSpan;
  vendorProduct: VendorProductLoadSpan;

  constructor(){
    this.rate = false;
    this.quantity = false;
    this.quantityReceived = false;
    this.createAssetRecordUponReceipt = false;
    this.deliveryDate = false;
    this.expectedDate = false;
    this.comments = false;
  }

  get purchaseLoadSpan(): PurchaseLoadSpan {
    if(!this.purchase){
		this.purchase = new PurchaseLoadSpan();
	}

    return this.purchase;
  }

  get vendorProductLoadSpan(): VendorProductLoadSpan {
    if(!this.vendorProduct){
		this.vendorProduct = new VendorProductLoadSpan();
	}

    return this.vendorProduct;
  }

  loadAllProperties() {
    this.rate = true;
    this.quantity = true;
    this.quantityReceived = true;
    this.createAssetRecordUponReceipt = true;
    this.deliveryDate = true;
    this.expectedDate = true;
    this.comments = true;
  }
}

export default PurchaseProductLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
