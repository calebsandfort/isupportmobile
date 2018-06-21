//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import ChangePropertyNames from './ChangePropertyNames';

class ChangeWorkflowGroupPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get workflowGroupGuid (): string {
    return super.resolvePropertyName("WorkflowGroupGuid");
  }
  get change (): ChangePropertyNames {
    return new ChangePropertyNames(super.resolvePropertyName("Change"));
  }
}

export default ChangeWorkflowGroupPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
