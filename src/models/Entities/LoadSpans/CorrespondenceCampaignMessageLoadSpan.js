//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CorrespondenceLoadSpan from './CorrespondenceLoadSpan';

export class CorrespondenceCampaignMessageLoadSpan {
  result: boolean;
  correspondence: CorrespondenceLoadSpan;

  constructor(){
    this.result = false;
  }

  get correspondenceLoadSpan(): CorrespondenceLoadSpan {
    if(!this.correspondence){
		this.correspondence = new CorrespondenceLoadSpan();
	}

    return this.correspondence;
  }

  loadAllProperties() {
    this.result = true;
  }
}

export default CorrespondenceCampaignMessageLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
