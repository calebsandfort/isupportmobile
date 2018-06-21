//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';

export class ChangeAuditHistoryLoadSpan {
  createdDate: boolean;
  entry: boolean;
  changeNumber: boolean;
  owner: SupportRepresentativeLoadSpan;
  customerOwner: CustomerLoadSpan;

  constructor(){
    this.createdDate = false;
    this.entry = false;
    this.changeNumber = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  get customerOwnerLoadSpan(): CustomerLoadSpan {
    if(!this.customerOwner){
		this.customerOwner = new CustomerLoadSpan();
	}

    return this.customerOwner;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.changeNumber = true;
  }
}

export default ChangeAuditHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
