//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

export class AcknowledgmentLoadSpan {
  acknowledgmentDate: boolean;
  acknowledgmentRep: SupportRepresentativeLoadSpan;

  constructor(){
    this.acknowledgmentDate = false;
  }

  get acknowledgmentRepLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.acknowledgmentRep){
		this.acknowledgmentRep = new SupportRepresentativeLoadSpan();
	}

    return this.acknowledgmentRep;
  }

  loadAllProperties() {
    this.acknowledgmentDate = true;
  }
}

export default AcknowledgmentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
