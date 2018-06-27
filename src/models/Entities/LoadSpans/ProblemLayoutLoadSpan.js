//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import TutorialLoadSpan from './TutorialLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ProblemLayoutLoadSpan extends LoadSpanBase {
  detailsLayout: boolean;
  tabLayout: boolean;
  tutorial: TutorialLoadSpan;

  constructor(){
    super();
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

export default ProblemLayoutLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
