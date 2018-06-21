//@flow
import EntityBase from './entityBase';
import CustomFieldDefinition from './CustomFieldDefinition';

export class CustomFieldValue extends EntityBase {
  value: string;
  definition: CustomFieldDefinition;

  static fromApiEntity(apiCustomFieldValue:CustomFieldValueType): CustomFieldValue {
    let customFieldValue = new CustomFieldValue();
    customFieldValue.id = apiCustomFieldValue.id;
    customFieldValue.value = apiCustomFieldValue.value;
    if (apiCustomFieldValue.definition) customFieldValue.definition = CustomFieldDefinition.fromApiEntity(apiCustomFieldValue.definition);

    return customFieldValue;
  }
}

export default CustomFieldValue;

export type CustomFieldValueType = {
  id: number,
  value: string;
  definition: CustomFieldDefinition;
}

