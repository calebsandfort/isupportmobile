//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomFieldDataSourcePropertyNames from './CustomFieldDataSourcePropertyNames';

class CustomFieldDefinitionPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get collectionId (): string {
    return super.resolvePropertyName("CollectionId");
  }
  get position (): string {
    return super.resolvePropertyName("Position");
  }
  get label (): string {
    return super.resolvePropertyName("Label");
  }
  get requiered (): string {
    return super.resolvePropertyName("Requiered");
  }
  get requieredOnClose (): string {
    return super.resolvePropertyName("RequieredOnClose");
  }
  get options (): string {
    return super.resolvePropertyName("Options");
  }
  get defaultValue (): string {
    return super.resolvePropertyName("DefaultValue");
  }
  get availableToCustomers (): string {
    return super.resolvePropertyName("AvailableToCustomers");
  }
  get pendingDeletion (): string {
    return super.resolvePropertyName("PendingDeletion");
  }
  get maxColumns (): string {
    return super.resolvePropertyName("MaxColumns");
  }
  get tooltip (): string {
    return super.resolvePropertyName("Tooltip");
  }
  get availableToReps (): string {
    return super.resolvePropertyName("AvailableToReps");
  }
  get type (): string {
    return super.resolvePropertyName("Type");
  }
  get dataSource (): CustomFieldDataSourcePropertyNames {
    return new CustomFieldDataSourcePropertyNames(super.resolvePropertyName("DataSource"));
  }
}

export default CustomFieldDefinitionPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
