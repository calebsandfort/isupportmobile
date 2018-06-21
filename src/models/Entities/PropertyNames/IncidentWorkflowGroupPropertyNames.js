//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import IncidentPropertyNames from './IncidentPropertyNames';

class IncidentWorkflowGroupPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get workflowGroupGuid (): string {
    return super.resolvePropertyName("WorkflowGroupGuid");
  }
  get incident (): IncidentPropertyNames {
    return new IncidentPropertyNames(super.resolvePropertyName("Incident"));
  }
}

export default IncidentWorkflowGroupPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
