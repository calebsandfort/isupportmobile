//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import TutorialLoadSpan from './TutorialLoadSpan';
import TutorialStepImageLoadSpan from './TutorialStepImageLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class TutorialStepLoadSpan extends LoadSpanBase {
  name: boolean;
  position: boolean;
  tutorial: TutorialLoadSpan;
  image: TutorialStepImageLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.position = false;
  }

  get tutorialLoadSpan(): TutorialLoadSpan {
    if(!this.tutorial){
		this.tutorial = new TutorialLoadSpan();
	}

    return this.tutorial;
  }

  get imageLoadSpan(): TutorialStepImageLoadSpan {
    if(!this.image){
		this.image = new TutorialStepImageLoadSpan();
	}

    return this.image;
  }

  loadAllProperties() {
    this.name = true;
    this.position = true;
  }
}

export default TutorialStepLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
