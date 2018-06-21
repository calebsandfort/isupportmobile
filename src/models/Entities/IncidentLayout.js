//@flow
import EntityBase from './entityBase';
import Tutorial from './Tutorial';

export class IncidentLayout extends EntityBase {
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;

  static fromApiEntity(apiIncidentLayout:IncidentLayoutType): IncidentLayout {
    let incidentLayout = new IncidentLayout();
    incidentLayout.id = apiIncidentLayout.id;
    incidentLayout.detailsLayout = apiIncidentLayout.detailsLayout;
    incidentLayout.tabLayout = apiIncidentLayout.tabLayout;
    if (apiIncidentLayout.tutorial) incidentLayout.tutorial = Tutorial.fromApiEntity(apiIncidentLayout.tutorial);

    return incidentLayout;
  }
}

export default IncidentLayout;

export type IncidentLayoutType = {
  id: number,
  detailsLayout: string;
  tabLayout: string;
  tutorial: Tutorial;
}

