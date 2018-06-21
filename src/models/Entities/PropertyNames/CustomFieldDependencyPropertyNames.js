//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomFieldDefinitionPropertyNames from './CustomFieldDefinitionPropertyNames';

class CustomFieldDependencyPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get dependencyValue (): string {
    return super.resolvePropertyName("DependencyValue");
  }
  get matchType (): string {
    return super.resolvePropertyName("MatchType");
  }
  get conditionDefinition (): CustomFieldDefinitionPropertyNames {
    return new CustomFieldDefinitionPropertyNames(super.resolvePropertyName("ConditionDefinition"));
  }
  get targetDefinition (): CustomFieldDefinitionPropertyNames {
    return new CustomFieldDefinitionPropertyNames(super.resolvePropertyName("TargetDefinition"));
  }
  get parent (): CustomFieldDependencyPropertyNames {
    return new CustomFieldDependencyPropertyNames(super.resolvePropertyName("Parent"));
  }
}

export default CustomFieldDependencyPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
