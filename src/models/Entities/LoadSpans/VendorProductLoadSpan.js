//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import CompanyLoadSpan from './CompanyLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import ProductLoadSpan from './ProductLoadSpan';

export class VendorProductLoadSpan {
  price: boolean;
  customer: CustomerLoadSpan;
  company: CompanyLoadSpan;
  supportRepresentative: SupportRepresentativeLoadSpan;
  product: ProductLoadSpan;

  constructor(){
    this.price = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get companyLoadSpan(): CompanyLoadSpan {
    if(!this.company){
		this.company = new CompanyLoadSpan();
	}

    return this.company;
  }

  get supportRepresentativeLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.supportRepresentative){
		this.supportRepresentative = new SupportRepresentativeLoadSpan();
	}

    return this.supportRepresentative;
  }

  get productLoadSpan(): ProductLoadSpan {
    if(!this.product){
		this.product = new ProductLoadSpan();
	}

    return this.product;
  }

  loadAllProperties() {
    this.price = true;
  }
}

export default VendorProductLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
