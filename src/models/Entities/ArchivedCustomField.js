//@flow
import EntityBase from './entityBase';
import ArchivedIncident from './ArchivedIncident';

export class ArchivedCustomField extends EntityBase {
  value: string;
  label: string;
  incident: ArchivedIncident;

  static fromApiEntity(apiArchivedCustomField:ArchivedCustomFieldType): ArchivedCustomField {
    let archivedCustomField = new ArchivedCustomField();
    archivedCustomField.id = apiArchivedCustomField.id;
    archivedCustomField.value = apiArchivedCustomField.value;
    archivedCustomField.label = apiArchivedCustomField.label;
    if (apiArchivedCustomField.incident) archivedCustomField.incident = ArchivedIncident.fromApiEntity(apiArchivedCustomField.incident);

    return archivedCustomField;
  }
}

export default ArchivedCustomField;

export type ArchivedCustomFieldType = {
  id: number,
  value: string;
  label: string;
  incident: ArchivedIncident;
}

