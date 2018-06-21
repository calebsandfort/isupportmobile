//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import TutorialLoadSpan from './TutorialLoadSpan';

export class ServiceContractLayoutLoadSpan {
  detailsLayout: boolean;
  tabLayout: boolean;
  tutorial: TutorialLoadSpan;

  constructor(){
    this.detailsLayout = false;
    this.tabLayout = false;
  }

  get tutorialLoadSpan(): TutorialLoadSpan {
    if(!this.tutorial){
		this.tutorial = new TutorialLoadSpan();
	}

    return this.tutorial;
  }

  loadAllProperties() {
    this.detailsLayout = true;
    this.tabLayout = true;
  }
}

export default ServiceContractLayoutLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
