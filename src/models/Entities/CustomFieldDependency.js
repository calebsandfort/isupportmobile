//@flow
import EntityBase from './entityBase';
import CustomFieldDefinition from './CustomFieldDefinition';
import {LogicOperators} from './Enums';

export class CustomFieldDependency extends EntityBase {
  dependencyValue: string;
  matchType: LogicOperators;
  conditionDefinition: CustomFieldDefinition;
  targetDefinition: CustomFieldDefinition;
  parent: CustomFieldDependency;

  static fromApiEntity(apiCustomFieldDependency:CustomFieldDependencyType): CustomFieldDependency {
    let customFieldDependency = new CustomFieldDependency();
    customFieldDependency.id = apiCustomFieldDependency.id;
    customFieldDependency.dependencyValue = apiCustomFieldDependency.dependencyValue;
    customFieldDependency.matchType = LogicOperators.enumOrdinalOf(parseInt(apiCustomFieldDependency.matchType, 10));
    if (apiCustomFieldDependency.conditionDefinition) customFieldDependency.conditionDefinition = CustomFieldDefinition.fromApiEntity(apiCustomFieldDependency.conditionDefinition);
    if (apiCustomFieldDependency.targetDefinition) customFieldDependency.targetDefinition = CustomFieldDefinition.fromApiEntity(apiCustomFieldDependency.targetDefinition);
    if (apiCustomFieldDependency.parent) customFieldDependency.parent = CustomFieldDependency.fromApiEntity(apiCustomFieldDependency.parent);

    return customFieldDependency;
  }
}

export default CustomFieldDependency;

export type CustomFieldDependencyType = {
  id: number,
  dependencyValue: string;
  matchType: LogicOperators;
  conditionDefinition: CustomFieldDefinition;
  targetDefinition: CustomFieldDefinition;
  parent: CustomFieldDependency;
}

