//@flow
import EntityBase from './entityBase';

export class TutorialStepImage extends EntityBase {
  imageData: string;
  modifiedDate: string;

  static fromApiEntity(apiTutorialStepImage:TutorialStepImageType): TutorialStepImage {
    let tutorialStepImage = new TutorialStepImage();
    tutorialStepImage.id = apiTutorialStepImage.id;
    tutorialStepImage.imageData = apiTutorialStepImage.imageData;
    tutorialStepImage.modifiedDate = apiTutorialStepImage.modifiedDate;

    return tutorialStepImage;
  }
}

export default TutorialStepImage;

export type TutorialStepImageType = {
  id: number,
  imageData: string;
  modifiedDate: string;
}

