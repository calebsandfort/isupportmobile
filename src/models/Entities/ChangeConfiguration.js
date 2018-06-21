//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import UrgencyImpactMapping from './UrgencyImpactMapping';
import ChangeStatus from './ChangeStatus';
import CustomChangeType from './CustomChangeType';
import WorkHistoryType from './WorkHistoryType';
import {CustomerWorkHistoryPostMethod} from './Enums';

export class ChangeConfiguration extends EntityBase {
  includeCustomerWorkHistory: string;
  defaultScheduledImplementationInterval: string;
  defaultReviewInterval: string;
  defaultDueInterval: string;
  setAssigneeAsAuthor: string;
  workHistoryTimeRequired: string;
  workHistoryStartStopFieldsEnabled: string;
  includeWorkHistoryNotes: CustomerWorkHistoryPostMethod;
  defaultAssignee: SupportRepresentative;
  defaultMapping: UrgencyImpactMapping;
  defaultStatus: ChangeStatus;
  defaultChangeType: CustomChangeType;
  defaultWorkHistoryType: WorkHistoryType;

  static fromApiEntity(apiChangeConfiguration:ChangeConfigurationType): ChangeConfiguration {
    let changeConfiguration = new ChangeConfiguration();
    changeConfiguration.id = apiChangeConfiguration.id;
    changeConfiguration.includeCustomerWorkHistory = apiChangeConfiguration.includeCustomerWorkHistory;
    changeConfiguration.defaultScheduledImplementationInterval = apiChangeConfiguration.defaultScheduledImplementationInterval;
    changeConfiguration.defaultReviewInterval = apiChangeConfiguration.defaultReviewInterval;
    changeConfiguration.defaultDueInterval = apiChangeConfiguration.defaultDueInterval;
    changeConfiguration.setAssigneeAsAuthor = apiChangeConfiguration.setAssigneeAsAuthor;
    changeConfiguration.workHistoryTimeRequired = apiChangeConfiguration.workHistoryTimeRequired;
    changeConfiguration.workHistoryStartStopFieldsEnabled = apiChangeConfiguration.workHistoryStartStopFieldsEnabled;
    changeConfiguration.includeWorkHistoryNotes = CustomerWorkHistoryPostMethod.enumOrdinalOf(parseInt(apiChangeConfiguration.includeWorkHistoryNotes, 10));
    if (apiChangeConfiguration.defaultAssignee) changeConfiguration.defaultAssignee = SupportRepresentative.fromApiEntity(apiChangeConfiguration.defaultAssignee);
    if (apiChangeConfiguration.defaultMapping) changeConfiguration.defaultMapping = UrgencyImpactMapping.fromApiEntity(apiChangeConfiguration.defaultMapping);
    if (apiChangeConfiguration.defaultStatus) changeConfiguration.defaultStatus = ChangeStatus.fromApiEntity(apiChangeConfiguration.defaultStatus);
    if (apiChangeConfiguration.defaultChangeType) changeConfiguration.defaultChangeType = CustomChangeType.fromApiEntity(apiChangeConfiguration.defaultChangeType);
    if (apiChangeConfiguration.defaultWorkHistoryType) changeConfiguration.defaultWorkHistoryType = WorkHistoryType.fromApiEntity(apiChangeConfiguration.defaultWorkHistoryType);

    return changeConfiguration;
  }
}

export default ChangeConfiguration;

export type ChangeConfigurationType = {
  id: number,
  includeCustomerWorkHistory: string;
  defaultScheduledImplementationInterval: string;
  defaultReviewInterval: string;
  defaultDueInterval: string;
  setAssigneeAsAuthor: string;
  workHistoryTimeRequired: string;
  workHistoryStartStopFieldsEnabled: string;
  includeWorkHistoryNotes: CustomerWorkHistoryPostMethod;
  defaultAssignee: SupportRepresentative;
  defaultMapping: UrgencyImpactMapping;
  defaultStatus: ChangeStatus;
  defaultChangeType: CustomChangeType;
  defaultWorkHistoryType: WorkHistoryType;
}

