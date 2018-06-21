//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import Company from './Company';
import SupportRepresentative from './SupportRepresentative';
import Product from './Product';

export class VendorProduct extends EntityBase {
  price: string;
  customer: Customer;
  company: Company;
  supportRepresentative: SupportRepresentative;
  product: Product;

  static fromApiEntity(apiVendorProduct:VendorProductType): VendorProduct {
    let vendorProduct = new VendorProduct();
    vendorProduct.id = apiVendorProduct.id;
    vendorProduct.price = apiVendorProduct.price;
    if (apiVendorProduct.customer) vendorProduct.customer = Customer.fromApiEntity(apiVendorProduct.customer);
    if (apiVendorProduct.company) vendorProduct.company = Company.fromApiEntity(apiVendorProduct.company);
    if (apiVendorProduct.supportRepresentative) vendorProduct.supportRepresentative = SupportRepresentative.fromApiEntity(apiVendorProduct.supportRepresentative);
    if (apiVendorProduct.product) vendorProduct.product = Product.fromApiEntity(apiVendorProduct.product);

    return vendorProduct;
  }
}

export default VendorProduct;

export type VendorProductType = {
  id: number,
  price: string;
  customer: Customer;
  company: Company;
  supportRepresentative: SupportRepresentative;
  product: Product;
}

