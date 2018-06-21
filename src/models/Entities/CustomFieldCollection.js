//@flow
import EntityBase from './entityBase';

export class CustomFieldCollection extends EntityBase {

  static fromApiEntity(apiCustomFieldCollection:CustomFieldCollectionType): CustomFieldCollection {
    let customFieldCollection = new CustomFieldCollection();
    customFieldCollection.id = apiCustomFieldCollection.id;

    return customFieldCollection;
  }
}

export default CustomFieldCollection;

export type CustomFieldCollectionType = {
  id: number,
}

