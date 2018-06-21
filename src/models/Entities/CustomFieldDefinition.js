//@flow
import EntityBase from './entityBase';
import CustomFieldDataSource from './CustomFieldDataSource';
import {CustomFieldTypes} from './Enums';

export class CustomFieldDefinition extends EntityBase {
  collectionId: string;
  position: string;
  label: string;
  requiered: string;
  requieredOnClose: string;
  options: string;
  defaultValue: string;
  availableToCustomers: string;
  pendingDeletion: string;
  maxColumns: string;
  tooltip: string;
  availableToReps: string;
  type: CustomFieldTypes;
  dataSource: CustomFieldDataSource;

  static fromApiEntity(apiCustomFieldDefinition:CustomFieldDefinitionType): CustomFieldDefinition {
    let customFieldDefinition = new CustomFieldDefinition();
    customFieldDefinition.id = apiCustomFieldDefinition.id;
    customFieldDefinition.collectionId = apiCustomFieldDefinition.collectionId;
    customFieldDefinition.position = apiCustomFieldDefinition.position;
    customFieldDefinition.label = apiCustomFieldDefinition.label;
    customFieldDefinition.requiered = apiCustomFieldDefinition.requiered;
    customFieldDefinition.requieredOnClose = apiCustomFieldDefinition.requieredOnClose;
    customFieldDefinition.options = apiCustomFieldDefinition.options;
    customFieldDefinition.defaultValue = apiCustomFieldDefinition.defaultValue;
    customFieldDefinition.availableToCustomers = apiCustomFieldDefinition.availableToCustomers;
    customFieldDefinition.pendingDeletion = apiCustomFieldDefinition.pendingDeletion;
    customFieldDefinition.maxColumns = apiCustomFieldDefinition.maxColumns;
    customFieldDefinition.tooltip = apiCustomFieldDefinition.tooltip;
    customFieldDefinition.availableToReps = apiCustomFieldDefinition.availableToReps;
    customFieldDefinition.type = CustomFieldTypes.enumOrdinalOf(parseInt(apiCustomFieldDefinition.type, 10));
    if (apiCustomFieldDefinition.dataSource) customFieldDefinition.dataSource = CustomFieldDataSource.fromApiEntity(apiCustomFieldDefinition.dataSource);

    return customFieldDefinition;
  }
}

export default CustomFieldDefinition;

export type CustomFieldDefinitionType = {
  id: number,
  collectionId: string;
  position: string;
  label: string;
  requiered: string;
  requieredOnClose: string;
  options: string;
  defaultValue: string;
  availableToCustomers: string;
  pendingDeletion: string;
  maxColumns: string;
  tooltip: string;
  availableToReps: string;
  type: CustomFieldTypes;
  dataSource: CustomFieldDataSource;
}

