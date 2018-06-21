//@flow
import EntityBase from './entityBase';
import ArchivedChange from './ArchivedChange';

export class ArchivedChangeCustomField extends EntityBase {
  value: string;
  label: string;
  change: ArchivedChange;

  static fromApiEntity(apiArchivedChangeCustomField:ArchivedChangeCustomFieldType): ArchivedChangeCustomField {
    let archivedChangeCustomField = new ArchivedChangeCustomField();
    archivedChangeCustomField.id = apiArchivedChangeCustomField.id;
    archivedChangeCustomField.value = apiArchivedChangeCustomField.value;
    archivedChangeCustomField.label = apiArchivedChangeCustomField.label;
    if (apiArchivedChangeCustomField.change) archivedChangeCustomField.change = ArchivedChange.fromApiEntity(apiArchivedChangeCustomField.change);

    return archivedChangeCustomField;
  }
}

export default ArchivedChangeCustomField;

export type ArchivedChangeCustomFieldType = {
  id: number,
  value: string;
  label: string;
  change: ArchivedChange;
}

