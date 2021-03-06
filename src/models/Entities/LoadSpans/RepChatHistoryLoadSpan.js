//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class RepChatHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  isFromSystem: boolean;
  owner: SupportRepresentativeLoadSpan;
  recipient: SupportRepresentativeLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.entry = false;
    this.isFromSystem = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  get recipientLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.recipient){
		this.recipient = new SupportRepresentativeLoadSpan();
	}

    return this.recipient;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.isFromSystem = true;
  }
}

export default RepChatHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
