//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomFieldDefinitionLoadSpan from './CustomFieldDefinitionLoadSpan';

export class CustomFieldDependencyLoadSpan {
  dependencyValue: boolean;
  matchType: boolean;
  conditionDefinition: CustomFieldDefinitionLoadSpan;
  targetDefinition: CustomFieldDefinitionLoadSpan;
  parent: CustomFieldDependencyLoadSpan;

  constructor(){
    this.dependencyValue = false;
    this.matchType = false;
  }

  get conditionDefinitionLoadSpan(): CustomFieldDefinitionLoadSpan {
    if(!this.conditionDefinition){
		this.conditionDefinition = new CustomFieldDefinitionLoadSpan();
	}

    return this.conditionDefinition;
  }

  get targetDefinitionLoadSpan(): CustomFieldDefinitionLoadSpan {
    if(!this.targetDefinition){
		this.targetDefinition = new CustomFieldDefinitionLoadSpan();
	}

    return this.targetDefinition;
  }

  get parentLoadSpan(): CustomFieldDependencyLoadSpan {
    if(!this.parent){
		this.parent = new CustomFieldDependencyLoadSpan();
	}

    return this.parent;
  }

  loadAllProperties() {
    this.dependencyValue = true;
    this.matchType = true;
  }
}

export default CustomFieldDependencyLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
