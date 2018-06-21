//@flow
import EntityBase from './entityBase';
import TutorialStep from './TutorialStep';

export class TutorialStepTag extends EntityBase {
  description: string;
  content: string;
  top: string;
  left: string;
  color: string;
  rotation: string;
  step: TutorialStep;

  static fromApiEntity(apiTutorialStepTag:TutorialStepTagType): TutorialStepTag {
    let tutorialStepTag = new TutorialStepTag();
    tutorialStepTag.id = apiTutorialStepTag.id;
    tutorialStepTag.description = apiTutorialStepTag.description;
    tutorialStepTag.content = apiTutorialStepTag.content;
    tutorialStepTag.top = apiTutorialStepTag.top;
    tutorialStepTag.left = apiTutorialStepTag.left;
    tutorialStepTag.color = apiTutorialStepTag.color;
    tutorialStepTag.rotation = apiTutorialStepTag.rotation;
    if (apiTutorialStepTag.step) tutorialStepTag.step = TutorialStep.fromApiEntity(apiTutorialStepTag.step);

    return tutorialStepTag;
  }
}

export default TutorialStepTag;

export type TutorialStepTagType = {
  id: number,
  description: string;
  content: string;
  top: string;
  left: string;
  color: string;
  rotation: string;
  step: TutorialStep;
}

