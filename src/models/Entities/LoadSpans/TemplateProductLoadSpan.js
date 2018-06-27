//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PurchaseTemplateLoadSpan from './PurchaseTemplateLoadSpan';
import VendorProductLoadSpan from './VendorProductLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class TemplateProductLoadSpan extends LoadSpanBase {
  rate: boolean;
  quantity: boolean;
  createAssetRecordUponReceipt: boolean;
  deliveryDateInterval: boolean;
  expectedDateInterval: boolean;
  comments: boolean;
  template: PurchaseTemplateLoadSpan;
  vendorProduct: VendorProductLoadSpan;

  constructor(){
    super();
    this.rate = false;
    this.quantity = false;
    this.createAssetRecordUponReceipt = false;
    this.deliveryDateInterval = false;
    this.expectedDateInterval = false;
    this.comments = false;
  }

  get templateLoadSpan(): PurchaseTemplateLoadSpan {
    if(!this.template){
		this.template = new PurchaseTemplateLoadSpan();
	}

    return this.template;
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
    this.createAssetRecordUponReceipt = true;
    this.deliveryDateInterval = true;
    this.expectedDateInterval = true;
    this.comments = true;
  }
}

export default TemplateProductLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
