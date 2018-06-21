//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ChangeLoadSpan from './ChangeLoadSpan';

export class ChangeWorkflowGroupLoadSpan {
  workflowGroupGuid: boolean;
  change: ChangeLoadSpan;

  constructor(){
    this.workflowGroupGuid = false;
  }

  get changeLoadSpan(): ChangeLoadSpan {
    if(!this.change){
		this.change = new ChangeLoadSpan();
	}

    return this.change;
  }

  loadAllProperties() {
    this.workflowGroupGuid = true;
  }
}

export default ChangeWorkflowGroupLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
