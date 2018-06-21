//@flow
import EntityBase from './entityBase';
import ArchivedProblem from './ArchivedProblem';

export class ArchivedProblemCustomField extends EntityBase {
  value: string;
  label: string;
  problem: ArchivedProblem;

  static fromApiEntity(apiArchivedProblemCustomField:ArchivedProblemCustomFieldType): ArchivedProblemCustomField {
    let archivedProblemCustomField = new ArchivedProblemCustomField();
    archivedProblemCustomField.id = apiArchivedProblemCustomField.id;
    archivedProblemCustomField.value = apiArchivedProblemCustomField.value;
    archivedProblemCustomField.label = apiArchivedProblemCustomField.label;
    if (apiArchivedProblemCustomField.problem) archivedProblemCustomField.problem = ArchivedProblem.fromApiEntity(apiArchivedProblemCustomField.problem);

    return archivedProblemCustomField;
  }
}

export default ArchivedProblemCustomField;

export type ArchivedProblemCustomFieldType = {
  id: number,
  value: string;
  label: string;
  problem: ArchivedProblem;
}

