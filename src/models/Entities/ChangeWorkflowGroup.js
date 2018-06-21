//@flow
import EntityBase from './entityBase';
import Change from './Change';

export class ChangeWorkflowGroup extends EntityBase {
  workflowGroupGuid: string;
  change: Change;

  static fromApiEntity(apiChangeWorkflowGroup:ChangeWorkflowGroupType): ChangeWorkflowGroup {
    let changeWorkflowGroup = new ChangeWorkflowGroup();
    changeWorkflowGroup.id = apiChangeWorkflowGroup.id;
    changeWorkflowGroup.workflowGroupGuid = apiChangeWorkflowGroup.workflowGroupGuid;
    if (apiChangeWorkflowGroup.change) changeWorkflowGroup.change = Change.fromApiEntity(apiChangeWorkflowGroup.change);

    return changeWorkflowGroup;
  }
}

export default ChangeWorkflowGroup;

export type ChangeWorkflowGroupType = {
  id: number,
  workflowGroupGuid: string;
  change: Change;
}

