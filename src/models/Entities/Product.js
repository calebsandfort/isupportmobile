//@flow
import EntityBase from './entityBase';
import AssetType from './AssetType';

export class Product extends EntityBase {
  name: string;
  description: string;
  availableToEUD: string;
  allowPartialQuantities: string;
  assetType: AssetType;

  static fromApiEntity(apiProduct:ProductType): Product {
    let product = new Product();
    product.id = apiProduct.id;
    product.name = apiProduct.name;
    product.description = apiProduct.description;
    product.availableToEUD = apiProduct.availableToEUD;
    product.allowPartialQuantities = apiProduct.allowPartialQuantities;
    if (apiProduct.assetType) product.assetType = AssetType.fromApiEntity(apiProduct.assetType);

    return product;
  }
}

export default Product;

export type ProductType = {
  id: number,
  name: string;
  description: string;
  availableToEUD: string;
  allowPartialQuantities: string;
  assetType: AssetType;
}

