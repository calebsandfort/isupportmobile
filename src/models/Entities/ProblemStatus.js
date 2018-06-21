//@flow
import EntityBase from './entityBase';
import {ProblemStatusTypes} from './Enums';

export class ProblemStatus extends EntityBase {
  label: string;
  position: string;
  eudLabel: string;
  type: ProblemStatusTypes;

  static fromApiEntity(apiProblemStatus:ProblemStatusType): ProblemStatus {
    let problemStatus = new ProblemStatus();
    problemStatus.id = apiProblemStatus.id;
    problemStatus.label = apiProblemStatus.label;
    problemStatus.position = apiProblemStatus.position;
    problemStatus.eudLabel = apiProblemStatus.eudLabel;
    problemStatus.type = ProblemStatusTypes.enumOrdinalOf(parseInt(apiProblemStatus.type, 10));

    return problemStatus;
  }
}

export default ProblemStatus;

export type ProblemStatusType = {
  id: number,
  label: string;
  position: string;
  eudLabel: string;
  type: ProblemStatusTypes;
}

