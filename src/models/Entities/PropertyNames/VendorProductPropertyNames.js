//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import CompanyPropertyNames from './CompanyPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import ProductPropertyNames from './ProductPropertyNames';

class VendorProductPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get price (): string {
    return super.resolvePropertyName("Price");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get company (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("Company"));
  }
  get supportRepresentative (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("SupportRepresentative"));
  }
  get product (): ProductPropertyNames {
    return new ProductPropertyNames(super.resolvePropertyName("Product"));
  }
}

export default VendorProductPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
