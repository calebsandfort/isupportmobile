//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

export class PurchaseRepChatHistoryLoadSpan {
  createdDate: boolean;
  entry: boolean;
  isFromSystem: boolean;
  owner: SupportRepresentativeLoadSpan;
  recipient: SupportRepresentativeLoadSpan;

  constructor(){
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

export default PurchaseRepChatHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
