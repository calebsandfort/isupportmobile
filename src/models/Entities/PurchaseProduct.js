//@flow
import EntityBase from './entityBase';
import Purchase from './Purchase';
import VendorProduct from './VendorProduct';

export class PurchaseProduct extends EntityBase {
  rate: string;
  quantity: string;
  quantityReceived: string;
  createAssetRecordUponReceipt: string;
  deliveryDate: string;
  expectedDate: string;
  comments: string;
  purchase: Purchase;
  vendorProduct: VendorProduct;

  static fromApiEntity(apiPurchaseProduct:PurchaseProductType): PurchaseProduct {
    let purchaseProduct = new PurchaseProduct();
    purchaseProduct.id = apiPurchaseProduct.id;
    purchaseProduct.rate = apiPurchaseProduct.rate;
    purchaseProduct.quantity = apiPurchaseProduct.quantity;
    purchaseProduct.quantityReceived = apiPurchaseProduct.quantityReceived;
    purchaseProduct.createAssetRecordUponReceipt = apiPurchaseProduct.createAssetRecordUponReceipt;
    purchaseProduct.deliveryDate = apiPurchaseProduct.deliveryDate;
    purchaseProduct.expectedDate = apiPurchaseProduct.expectedDate;
    purchaseProduct.comments = apiPurchaseProduct.comments;
    if (apiPurchaseProduct.purchase) purchaseProduct.purchase = Purchase.fromApiEntity(apiPurchaseProduct.purchase);
    if (apiPurchaseProduct.vendorProduct) purchaseProduct.vendorProduct = VendorProduct.fromApiEntity(apiPurchaseProduct.vendorProduct);

    return purchaseProduct;
  }
}

export default PurchaseProduct;

export type PurchaseProductType = {
  id: number,
  rate: string;
  quantity: string;
  quantityReceived: string;
  createAssetRecordUponReceipt: string;
  deliveryDate: string;
  expectedDate: string;
  comments: string;
  purchase: Purchase;
  vendorProduct: VendorProduct;
}

