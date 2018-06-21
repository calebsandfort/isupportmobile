//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ArchivedIncidentPropertyNames from './ArchivedIncidentPropertyNames';

class ArchivedCustomFieldPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get value (): string {
    return super.resolvePropertyName("Value");
  }
  get label (): string {
    return super.resolvePropertyName("Label");
  }
  get incident (): ArchivedIncidentPropertyNames {
    return new ArchivedIncidentPropertyNames(super.resolvePropertyName("Incident"));
  }
}

export default ArchivedCustomFieldPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
