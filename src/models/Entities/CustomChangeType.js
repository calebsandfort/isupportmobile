//@flow
import EntityBase from './entityBase';
import {ChangeType} from './Enums';

export class CustomChangeType extends EntityBase {
  label: string;
  position: string;
  eudLabel: string;
  customFieldCollectionIdentifier: string;
  type: ChangeType;

  static fromApiEntity(apiCustomChangeType:CustomChangeTypeType): CustomChangeType {
    let customChangeType = new CustomChangeType();
    customChangeType.id = apiCustomChangeType.id;
    customChangeType.label = apiCustomChangeType.label;
    customChangeType.position = apiCustomChangeType.position;
    customChangeType.eudLabel = apiCustomChangeType.eudLabel;
    customChangeType.customFieldCollectionIdentifier = apiCustomChangeType.customFieldCollectionIdentifier;
    customChangeType.type = ChangeType.enumOrdinalOf(parseInt(apiCustomChangeType.type, 10));

    return customChangeType;
  }
}

export default CustomChangeType;

export type CustomChangeTypeType = {
  id: number,
  label: string;
  position: string;
  eudLabel: string;
  customFieldCollectionIdentifier: string;
  type: ChangeType;
}

