//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import IncidentCustomerChatSessionLoadSpan from './IncidentCustomerChatSessionLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class IncidentCustomerChatHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  incidentNumber: boolean;
  repIsSender: boolean;
  isFromSystem: boolean;
  customer: CustomerLoadSpan;
  rep: SupportRepresentativeLoadSpan;
  session: IncidentCustomerChatSessionLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.entry = false;
    this.incidentNumber = false;
    this.repIsSender = false;
    this.isFromSystem = false;
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

  get sessionLoadSpan(): IncidentCustomerChatSessionLoadSpan {
    if(!this.session){
		this.session = new IncidentCustomerChatSessionLoadSpan();
	}

    return this.session;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.incidentNumber = true;
    this.repIsSender = true;
    this.isFromSystem = true;
  }
}

export default IncidentCustomerChatHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
