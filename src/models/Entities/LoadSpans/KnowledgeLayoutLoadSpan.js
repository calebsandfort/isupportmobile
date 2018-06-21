//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import TutorialLoadSpan from './TutorialLoadSpan';

export class KnowledgeLayoutLoadSpan {
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

export default KnowledgeLayoutLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
