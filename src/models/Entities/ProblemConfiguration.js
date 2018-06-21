//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import UrgencyImpactMapping from './UrgencyImpactMapping';
import ProblemStatus from './ProblemStatus';
import IncidentStatus from './IncidentStatus';
import WorkHistoryType from './WorkHistoryType';

export class ProblemConfiguration extends EntityBase {
  setAssigneeAsAuthor: string;
  workHistoryTimeRequired: string;
  workHistoryTypeFieldEnabled: string;
  workHistoryStartStopFieldsEnabled: string;
  defaultAssignee: SupportRepresentative;
  defaultMapping: UrgencyImpactMapping;
  defaultStatus: ProblemStatus;
  incidentClosureStatus: IncidentStatus;
  defaultWorkHistoryType: WorkHistoryType;

  static fromApiEntity(apiProblemConfiguration:ProblemConfigurationType): ProblemConfiguration {
    let problemConfiguration = new ProblemConfiguration();
    problemConfiguration.id = apiProblemConfiguration.id;
    problemConfiguration.setAssigneeAsAuthor = apiProblemConfiguration.setAssigneeAsAuthor;
    problemConfiguration.workHistoryTimeRequired = apiProblemConfiguration.workHistoryTimeRequired;
    problemConfiguration.workHistoryTypeFieldEnabled = apiProblemConfiguration.workHistoryTypeFieldEnabled;
    problemConfiguration.workHistoryStartStopFieldsEnabled = apiProblemConfiguration.workHistoryStartStopFieldsEnabled;
    if (apiProblemConfiguration.defaultAssignee) problemConfiguration.defaultAssignee = SupportRepresentative.fromApiEntity(apiProblemConfiguration.defaultAssignee);
    if (apiProblemConfiguration.defaultMapping) problemConfiguration.defaultMapping = UrgencyImpactMapping.fromApiEntity(apiProblemConfiguration.defaultMapping);
    if (apiProblemConfiguration.defaultStatus) problemConfiguration.defaultStatus = ProblemStatus.fromApiEntity(apiProblemConfiguration.defaultStatus);
    if (apiProblemConfiguration.incidentClosureStatus) problemConfiguration.incidentClosureStatus = IncidentStatus.fromApiEntity(apiProblemConfiguration.incidentClosureStatus);
    if (apiProblemConfiguration.defaultWorkHistoryType) problemConfiguration.defaultWorkHistoryType = WorkHistoryType.fromApiEntity(apiProblemConfiguration.defaultWorkHistoryType);

    return problemConfiguration;
  }
}

export default ProblemConfiguration;

export type ProblemConfigurationType = {
  id: number,
  setAssigneeAsAuthor: string;
  workHistoryTimeRequired: string;
  workHistoryTypeFieldEnabled: string;
  workHistoryStartStopFieldsEnabled: string;
  defaultAssignee: SupportRepresentative;
  defaultMapping: UrgencyImpactMapping;
  defaultStatus: ProblemStatus;
  incidentClosureStatus: IncidentStatus;
  defaultWorkHistoryType: WorkHistoryType;
}

