//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

export class CustomerSalesNotesLoadSpan {
  createdDate: boolean;
  entry: boolean;
  customerGuid: boolean;
  opportunityGuid: boolean;
  owner: SupportRepresentativeLoadSpan;

  constructor(){
    this.createdDate = false;
    this.entry = false;
    this.customerGuid = false;
    this.opportunityGuid = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.customerGuid = true;
    this.opportunityGuid = true;
  }
}

export default CustomerSalesNotesLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
