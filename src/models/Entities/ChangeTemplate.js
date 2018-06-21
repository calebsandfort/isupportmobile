//@flow
import EntityBase from './entityBase';
import UrgencyImpactMapping from './UrgencyImpactMapping';
import ChangeStatus from './ChangeStatus';
import CustomChangeType from './CustomChangeType';
import SupportRepresentative from './SupportRepresentative';
import Group from './Group';
import Category from './Category';
import ChangeLayout from './ChangeLayout';

export class ChangeTemplate extends EntityBase {
  name: string;
  reason: string;
  description: string;
  results: string;
  mySupportLockCategory: string;
  availableToReps: string;
  defaultScheduledImplementationInterval: string;
  defaultReviewInterval: string;
  defaultDueInterval: string;
  isWorkflowTemplate: string;
  header: string;
  footer: string;
  appendText: string;
  appendDescriptionFromParent: string;
  defaultMapping: UrgencyImpactMapping;
  defaultStatus: ChangeStatus;
  defaultChangeType: CustomChangeType;
  assignee: SupportRepresentative;
  assigneeGroup: Group;
  category: Category;
  mySupportDisplayChangeLayout: ChangeLayout;
  mySupportSubmitChangeLayout: ChangeLayout;

  static fromApiEntity(apiChangeTemplate:ChangeTemplateType): ChangeTemplate {
    let changeTemplate = new ChangeTemplate();
    changeTemplate.id = apiChangeTemplate.id;
    changeTemplate.name = apiChangeTemplate.name;
    changeTemplate.reason = apiChangeTemplate.reason;
    changeTemplate.description = apiChangeTemplate.description;
    changeTemplate.results = apiChangeTemplate.results;
    changeTemplate.mySupportLockCategory = apiChangeTemplate.mySupportLockCategory;
    changeTemplate.availableToReps = apiChangeTemplate.availableToReps;
    changeTemplate.defaultScheduledImplementationInterval = apiChangeTemplate.defaultScheduledImplementationInterval;
    changeTemplate.defaultReviewInterval = apiChangeTemplate.defaultReviewInterval;
    changeTemplate.defaultDueInterval = apiChangeTemplate.defaultDueInterval;
    changeTemplate.isWorkflowTemplate = apiChangeTemplate.isWorkflowTemplate;
    changeTemplate.header = apiChangeTemplate.header;
    changeTemplate.footer = apiChangeTemplate.footer;
    changeTemplate.appendText = apiChangeTemplate.appendText;
    changeTemplate.appendDescriptionFromParent = apiChangeTemplate.appendDescriptionFromParent;
    if (apiChangeTemplate.defaultMapping) changeTemplate.defaultMapping = UrgencyImpactMapping.fromApiEntity(apiChangeTemplate.defaultMapping);
    if (apiChangeTemplate.defaultStatus) changeTemplate.defaultStatus = ChangeStatus.fromApiEntity(apiChangeTemplate.defaultStatus);
    if (apiChangeTemplate.defaultChangeType) changeTemplate.defaultChangeType = CustomChangeType.fromApiEntity(apiChangeTemplate.defaultChangeType);
    if (apiChangeTemplate.assignee) changeTemplate.assignee = SupportRepresentative.fromApiEntity(apiChangeTemplate.assignee);
    if (apiChangeTemplate.assigneeGroup) changeTemplate.assigneeGroup = Group.fromApiEntity(apiChangeTemplate.assigneeGroup);
    if (apiChangeTemplate.category) changeTemplate.category = Category.fromApiEntity(apiChangeTemplate.category);
    if (apiChangeTemplate.mySupportDisplayChangeLayout) changeTemplate.mySupportDisplayChangeLayout = ChangeLayout.fromApiEntity(apiChangeTemplate.mySupportDisplayChangeLayout);
    if (apiChangeTemplate.mySupportSubmitChangeLayout) changeTemplate.mySupportSubmitChangeLayout = ChangeLayout.fromApiEntity(apiChangeTemplate.mySupportSubmitChangeLayout);

    return changeTemplate;
  }
}

export default ChangeTemplate;

export type ChangeTemplateType = {
  id: number,
  name: string;
  reason: string;
  description: string;
  results: string;
  mySupportLockCategory: string;
  availableToReps: string;
  defaultScheduledImplementationInterval: string;
  defaultReviewInterval: string;
  defaultDueInterval: string;
  isWorkflowTemplate: string;
  header: string;
  footer: string;
  appendText: string;
  appendDescriptionFromParent: string;
  defaultMapping: UrgencyImpactMapping;
  defaultStatus: ChangeStatus;
  defaultChangeType: CustomChangeType;
  assignee: SupportRepresentative;
  assigneeGroup: Group;
  category: Category;
  mySupportDisplayChangeLayout: ChangeLayout;
  mySupportSubmitChangeLayout: ChangeLayout;
}

