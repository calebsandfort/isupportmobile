//@flow
import EntityBase from './entityBase';

export class Tutorial extends EntityBase {
  name: string;
  menuId: string;

  static fromApiEntity(apiTutorial:TutorialType): Tutorial {
    let tutorial = new Tutorial();
    tutorial.id = apiTutorial.id;
    tutorial.name = apiTutorial.name;
    tutorial.menuId = apiTutorial.menuId;

    return tutorial;
  }
}

export default Tutorial;

export type TutorialType = {
  id: number,
  name: string;
  menuId: string;
}

