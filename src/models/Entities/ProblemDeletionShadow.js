//@flow
import EntityBase from './entityBase';

export class ProblemDeletionShadow extends EntityBase {
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;

  static fromApiEntity(apiProblemDeletionShadow:ProblemDeletionShadowType): ProblemDeletionShadow {
    let problemDeletionShadow = new ProblemDeletionShadow();
    problemDeletionShadow.id = apiProblemDeletionShadow.id;
    problemDeletionShadow.number = apiProblemDeletionShadow.number;
    problemDeletionShadow.dateDeleted = apiProblemDeletionShadow.dateDeleted;
    problemDeletionShadow.deletedBy = apiProblemDeletionShadow.deletedBy;
    problemDeletionShadow.originalIdentifier = apiProblemDeletionShadow.originalIdentifier;

    return problemDeletionShadow;
  }
}

export default ProblemDeletionShadow;

export type ProblemDeletionShadowType = {
  id: number,
  number: string;
  dateDeleted: string;
  deletedBy: string;
  originalIdentifier: string;
}

