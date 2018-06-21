//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class ChangeLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiChangeLayout:ChangeLayoutType): ChangeLayout {
    let changeLayout = new ChangeLayout();
    changeLayout.id = apiChangeLayout.id;
    changeLayout.detailsLayout = apiChangeLayout.detailsLayout;
    changeLayout.tabLayout = apiChangeLayout.tabLayout;
    if (apiChangeLayout.tutorial) changeLayout.tutorial = Tutorial.fromApiEntity(apiChangeLayout.tutorial);

    return changeLayout;
  }
}

export default ChangeLayout;

export type ChangeLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

