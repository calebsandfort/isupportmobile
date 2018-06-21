//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';
import TutorialStepImage from './TutorialStepImage';

export class TutorialStep extends EntityBase {
  name: string;
  position: string;
  tutorial: Tutorial;
  image: TutorialStepImage;

  static fromApiEntity(apiTutorialStep:TutorialStepType): TutorialStep {
    let tutorialStep = new TutorialStep();
    tutorialStep.id = apiTutorialStep.id;
    tutorialStep.name = apiTutorialStep.name;
    tutorialStep.position = apiTutorialStep.position;
    if (apiTutorialStep.tutorial) tutorialStep.tutorial = Tutorial.fromApiEntity(apiTutorialStep.tutorial);
    if (apiTutorialStep.image) tutorialStep.image = TutorialStepImage.fromApiEntity(apiTutorialStep.image);

    return tutorialStep;
  }
}

export default TutorialStep;

export type TutorialStepType = {
  id: number,
  name: string;
  position: string;
  tutorial: Tutorial;
  image: TutorialStepImage;
}

