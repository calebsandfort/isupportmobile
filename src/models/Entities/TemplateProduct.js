//@flow
import EntityBase from './entityBase';
import PurchaseTemplate from './PurchaseTemplate';
import VendorProduct from './VendorProduct';

export class TemplateProduct extends EntityBase {
  rate: string;
  quantity: string;
  createAssetRecordUponReceipt: string;
  deliveryDateInterval: string;
  expectedDateInterval: string;
  comments: string;
  template: PurchaseTemplate;
  vendorProduct: VendorProduct;

  static fromApiEntity(apiTemplateProduct:TemplateProductType): TemplateProduct {
    let templateProduct = new TemplateProduct();
    templateProduct.id = apiTemplateProduct.id;
    templateProduct.rate = apiTemplateProduct.rate;
    templateProduct.quantity = apiTemplateProduct.quantity;
    templateProduct.createAssetRecordUponReceipt = apiTemplateProduct.createAssetRecordUponReceipt;
    templateProduct.deliveryDateInterval = apiTemplateProduct.deliveryDateInterval;
    templateProduct.expectedDateInterval = apiTemplateProduct.expectedDateInterval;
    templateProduct.comments = apiTemplateProduct.comments;
    if (apiTemplateProduct.template) templateProduct.template = PurchaseTemplate.fromApiEntity(apiTemplateProduct.template);
    if (apiTemplateProduct.vendorProduct) templateProduct.vendorProduct = VendorProduct.fromApiEntity(apiTemplateProduct.vendorProduct);

    return templateProduct;
  }
}

export default TemplateProduct;

export type TemplateProductType = {
  id: number,
  rate: string;
  quantity: string;
  createAssetRecordUponReceipt: string;
  deliveryDateInterval: string;
  expectedDateInterval: string;
  comments: string;
  template: PurchaseTemplate;
  vendorProduct: VendorProduct;
}

