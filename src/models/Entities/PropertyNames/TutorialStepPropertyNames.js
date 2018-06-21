//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import TutorialPropertyNames from './TutorialPropertyNames';
import TutorialStepImagePropertyNames from './TutorialStepImagePropertyNames';

class TutorialStepPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get position (): string {
    return super.resolvePropertyName("Position");
  }
  get tutorial (): TutorialPropertyNames {
    return new TutorialPropertyNames(super.resolvePropertyName("Tutorial"));
  }
  get image (): TutorialStepImagePropertyNames {
    return new TutorialStepImagePropertyNames(super.resolvePropertyName("Image"));
  }
}

export default TutorialStepPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
