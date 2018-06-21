//@flow
import EntityBase from './entityBase';
import UrgencyImpactMapping from './UrgencyImpactMapping';
import IncidentStatus from './IncidentStatus';
import WorkHistoryType from './WorkHistoryType';
import {IncidentPriority} from './Enums';
import {OwnerTypes} from './Enums';
import {CustomerWorkHistoryPostMethod} from './Enums';

export class IncidentConfiguration extends EntityBase {
  categoryEnabled: string;
  categoryDepth: string;
  approvalsEnabled: string;
  assignmentDefaultOwnerID: string;
  customerWorkHistoryEnabled: string;
  mappingEnabled: string;
  shortDescriptionEnabled: string;
  shortDescriptionRequired: string;
  workHistoryTypeFieldEnabled: string;
  workHistoryStartStopFieldsEnabled: string;
  defaultPriority: IncidentPriority;
  assignmentDefaultOwnerType: OwnerTypes;
  customerWorkHistoryPostMethod: CustomerWorkHistoryPostMethod;
  defaultMapping: UrgencyImpactMapping;
  defaultIncidentStatus: IncidentStatus;
  defaultWorkHistoryType: WorkHistoryType;

  static fromApiEntity(apiIncidentConfiguration:IncidentConfigurationType): IncidentConfiguration {
    let incidentConfiguration = new IncidentConfiguration();
    incidentConfiguration.id = apiIncidentConfiguration.id;
    incidentConfiguration.categoryEnabled = apiIncidentConfiguration.categoryEnabled;
    incidentConfiguration.categoryDepth = apiIncidentConfiguration.categoryDepth;
    incidentConfiguration.approvalsEnabled = apiIncidentConfiguration.approvalsEnabled;
    incidentConfiguration.assignmentDefaultOwnerID = apiIncidentConfiguration.assignmentDefaultOwnerID;
    incidentConfiguration.customerWorkHistoryEnabled = apiIncidentConfiguration.customerWorkHistoryEnabled;
    incidentConfiguration.mappingEnabled = apiIncidentConfiguration.mappingEnabled;
    incidentConfiguration.shortDescriptionEnabled = apiIncidentConfiguration.shortDescriptionEnabled;
    incidentConfiguration.shortDescriptionRequired = apiIncidentConfiguration.shortDescriptionRequired;
    incidentConfiguration.workHistoryTypeFieldEnabled = apiIncidentConfiguration.workHistoryTypeFieldEnabled;
    incidentConfiguration.workHistoryStartStopFieldsEnabled = apiIncidentConfiguration.workHistoryStartStopFieldsEnabled;
    incidentConfiguration.defaultPriority = IncidentPriority.enumOrdinalOf(parseInt(apiIncidentConfiguration.defaultPriority, 10));
    incidentConfiguration.assignmentDefaultOwnerType = OwnerTypes.enumOrdinalOf(parseInt(apiIncidentConfiguration.assignmentDefaultOwnerType, 10));
    incidentConfiguration.customerWorkHistoryPostMethod = CustomerWorkHistoryPostMethod.enumOrdinalOf(parseInt(apiIncidentConfiguration.customerWorkHistoryPostMethod, 10));
    if (apiIncidentConfiguration.defaultMapping) incidentConfiguration.defaultMapping = UrgencyImpactMapping.fromApiEntity(apiIncidentConfiguration.defaultMapping);
    if (apiIncidentConfiguration.defaultIncidentStatus) incidentConfiguration.defaultIncidentStatus = IncidentStatus.fromApiEntity(apiIncidentConfiguration.defaultIncidentStatus);
    if (apiIncidentConfiguration.defaultWorkHistoryType) incidentConfiguration.defaultWorkHistoryType = WorkHistoryType.fromApiEntity(apiIncidentConfiguration.defaultWorkHistoryType);

    return incidentConfiguration;
  }
}

export default IncidentConfiguration;

export type IncidentConfigurationType = {
  id: number,
  categoryEnabled: string;
  categoryDepth: string;
  approvalsEnabled: string;
  assignmentDefaultOwnerID: string;
  customerWorkHistoryEnabled: string;
  mappingEnabled: string;
  shortDescriptionEnabled: string;
  shortDescriptionRequired: string;
  workHistoryTypeFieldEnabled: string;
  workHistoryStartStopFieldsEnabled: string;
  defaultPriority: IncidentPriority;
  assignmentDefaultOwnerType: OwnerTypes;
  customerWorkHistoryPostMethod: CustomerWorkHistoryPostMethod;
  defaultMapping: UrgencyImpactMapping;
  defaultIncidentStatus: IncidentStatus;
  defaultWorkHistoryType: WorkHistoryType;
}

