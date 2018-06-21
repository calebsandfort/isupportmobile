//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import IncidentLoadSpan from './IncidentLoadSpan';

export class IncidentCustomerChatSessionLoadSpan {
  customer: CustomerLoadSpan;
  rep: SupportRepresentativeLoadSpan;
  incident: IncidentLoadSpan;

  constructor(){
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get repLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.rep){
		this.rep = new SupportRepresentativeLoadSpan();
	}

    return this.rep;
  }

  get incidentLoadSpan(): IncidentLoadSpan {
    if(!this.incident){
		this.incident = new IncidentLoadSpan();
	}

    return this.incident;
  }

  loadAllProperties() {
  }
}

export default IncidentCustomerChatSessionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
