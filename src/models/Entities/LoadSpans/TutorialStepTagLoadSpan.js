//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import TutorialStepLoadSpan from './TutorialStepLoadSpan';

export class TutorialStepTagLoadSpan {
  description: boolean;
  content: boolean;
  top: boolean;
  left: boolean;
  color: boolean;
  rotation: boolean;
  step: TutorialStepLoadSpan;

  constructor(){
    this.description = false;
    this.content = false;
    this.top = false;
    this.left = false;
    this.color = false;
    this.rotation = false;
  }

  get stepLoadSpan(): TutorialStepLoadSpan {
    if(!this.step){
		this.step = new TutorialStepLoadSpan();
	}

    return this.step;
  }

  loadAllProperties() {
    this.description = true;
    this.content = true;
    this.top = true;
    this.left = true;
    this.color = true;
    this.rotation = true;
  }
}

export default TutorialStepTagLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
