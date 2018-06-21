//@flow
import EntityBase from './entityBase';
import ArchivedPurchase from './ArchivedPurchase';

export class ArchivedPurchaseProduct extends EntityBase {
  vendor: string;
  product: string;
  quantity: string;
  quantityReceieved: string;
  rate: string;
  deliveryDate: string;
  expectedDate: string;
  comments: string;
  purchase: ArchivedPurchase;

  static fromApiEntity(apiArchivedPurchaseProduct:ArchivedPurchaseProductType): ArchivedPurchaseProduct {
    let archivedPurchaseProduct = new ArchivedPurchaseProduct();
    archivedPurchaseProduct.id = apiArchivedPurchaseProduct.id;
    archivedPurchaseProduct.vendor = apiArchivedPurchaseProduct.vendor;
    archivedPurchaseProduct.product = apiArchivedPurchaseProduct.product;
    archivedPurchaseProduct.quantity = apiArchivedPurchaseProduct.quantity;
    archivedPurchaseProduct.quantityReceieved = apiArchivedPurchaseProduct.quantityReceieved;
    archivedPurchaseProduct.rate = apiArchivedPurchaseProduct.rate;
    archivedPurchaseProduct.deliveryDate = apiArchivedPurchaseProduct.deliveryDate;
    archivedPurchaseProduct.expectedDate = apiArchivedPurchaseProduct.expectedDate;
    archivedPurchaseProduct.comments = apiArchivedPurchaseProduct.comments;
    if (apiArchivedPurchaseProduct.purchase) archivedPurchaseProduct.purchase = ArchivedPurchase.fromApiEntity(apiArchivedPurchaseProduct.purchase);

    return archivedPurchaseProduct;
  }
}

export default ArchivedPurchaseProduct;

export type ArchivedPurchaseProductType = {
  id: number,
  vendor: string;
  product: string;
  quantity: string;
  quantityReceieved: string;
  rate: string;
  deliveryDate: string;
  expectedDate: string;
  comments: string;
  purchase: ArchivedPurchase;
}

