//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class AcknowledgmentLoadSpan extends LoadSpanBase {
  acknowledgmentDate: boolean;
  acknowledgmentRep: SupportRepresentativeLoadSpan;

  constructor(){
    super();
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
