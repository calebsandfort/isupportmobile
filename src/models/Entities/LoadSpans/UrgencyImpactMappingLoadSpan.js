//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import UrgencyLoadSpan from './UrgencyLoadSpan';
import ImpactLoadSpan from './ImpactLoadSpan';

export class UrgencyImpactMappingLoadSpan {
  pendingDeletion: boolean;
  priority: boolean;
  urgency: UrgencyLoadSpan;
  impact: ImpactLoadSpan;

  constructor(){
    this.pendingDeletion = false;
    this.priority = false;
  }

  get urgencyLoadSpan(): UrgencyLoadSpan {
    if(!this.urgency){
		this.urgency = new UrgencyLoadSpan();
	}

    return this.urgency;
  }

  get impactLoadSpan(): ImpactLoadSpan {
    if(!this.impact){
		this.impact = new ImpactLoadSpan();
	}

    return this.impact;
  }

  loadAllProperties() {
    this.pendingDeletion = true;
    this.priority = true;
  }
}

export default UrgencyImpactMappingLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
