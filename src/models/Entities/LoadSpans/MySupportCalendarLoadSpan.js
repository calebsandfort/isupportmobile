//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import AccessCircleLoadSpan from './AccessCircleLoadSpan';

export class MySupportCalendarLoadSpan {
  name: boolean;
  repOwner: SupportRepresentativeLoadSpan;
  customerOwner: CustomerLoadSpan;
  accessCircle: AccessCircleLoadSpan;
  editAccessCircle: AccessCircleLoadSpan;

  constructor(){
    this.name = false;
  }

  get repOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.repOwner){
		this.repOwner = new SupportRepresentativeLoadSpan();
	}

    return this.repOwner;
  }

  get customerOwnerLoadSpan(): CustomerLoadSpan {
    if(!this.customerOwner){
		this.customerOwner = new CustomerLoadSpan();
	}

    return this.customerOwner;
  }

  get accessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.accessCircle){
		this.accessCircle = new AccessCircleLoadSpan();
	}

    return this.accessCircle;
  }

  get editAccessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.editAccessCircle){
		this.editAccessCircle = new AccessCircleLoadSpan();
	}

    return this.editAccessCircle;
  }

  loadAllProperties() {
    this.name = true;
  }
}

export default MySupportCalendarLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
