//@flow
import EntityBase from './entityBase';
import Incident from './Incident';

export class IncidentWorkflowGroup extends EntityBase {
  workflowGroupGuid: string;
  incident: Incident;

  static fromApiEntity(apiIncidentWorkflowGroup:IncidentWorkflowGroupType): IncidentWorkflowGroup {
    let incidentWorkflowGroup = new IncidentWorkflowGroup();
    incidentWorkflowGroup.id = apiIncidentWorkflowGroup.id;
    incidentWorkflowGroup.workflowGroupGuid = apiIncidentWorkflowGroup.workflowGroupGuid;
    if (apiIncidentWorkflowGroup.incident) incidentWorkflowGroup.incident = Incident.fromApiEntity(apiIncidentWorkflowGroup.incident);

    return incidentWorkflowGroup;
  }
}

export default IncidentWorkflowGroup;

export type IncidentWorkflowGroupType = {
  id: number,
  workflowGroupGuid: string;
  incident: Incident;
}

