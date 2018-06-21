//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import TutorialStepPropertyNames from './TutorialStepPropertyNames';

class TutorialStepTagPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get content (): string {
    return super.resolvePropertyName("Content");
  }
  get top (): string {
    return super.resolvePropertyName("Top");
  }
  get left (): string {
    return super.resolvePropertyName("Left");
  }
  get color (): string {
    return super.resolvePropertyName("Color");
  }
  get rotation (): string {
    return super.resolvePropertyName("Rotation");
  }
  get step (): TutorialStepPropertyNames {
    return new TutorialStepPropertyNames(super.resolvePropertyName("Step"));
  }
}

export default TutorialStepTagPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
