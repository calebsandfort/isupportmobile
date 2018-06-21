//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class ProblemLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiProblemLayout:ProblemLayoutType): ProblemLayout {
    let problemLayout = new ProblemLayout();
    problemLayout.id = apiProblemLayout.id;
    problemLayout.detailsLayout = apiProblemLayout.detailsLayout;
    problemLayout.tabLayout = apiProblemLayout.tabLayout;
    if (apiProblemLayout.tutorial) problemLayout.tutorial = Tutorial.fromApiEntity(apiProblemLayout.tutorial);

    return problemLayout;
  }
}

export default ProblemLayout;

export type ProblemLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

