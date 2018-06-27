//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomFieldDataSourceLoadSpan from './CustomFieldDataSourceLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class CustomFieldDefinitionLoadSpan extends LoadSpanBase {
  collectionId: boolean;
  position: boolean;
  label: boolean;
  requiered: boolean;
  requieredOnClose: boolean;
  options: boolean;
  defaultValue: boolean;
  availableToCustomers: boolean;
  pendingDeletion: boolean;
  maxColumns: boolean;
  tooltip: boolean;
  availableToReps: boolean;
  type: boolean;
  dataSource: CustomFieldDataSourceLoadSpan;

  constructor(){
    super();
    this.collectionId = false;
    this.position = false;
    this.label = false;
    this.requiered = false;
    this.requieredOnClose = false;
    this.options = false;
    this.defaultValue = false;
    this.availableToCustomers = false;
    this.pendingDeletion = false;
    this.maxColumns = false;
    this.tooltip = false;
    this.availableToReps = false;
    this.type = false;
  }

  get dataSourceLoadSpan(): CustomFieldDataSourceLoadSpan {
    if(!this.dataSource){
		this.dataSource = new CustomFieldDataSourceLoadSpan();
	}

    return this.dataSource;
  }

  loadAllProperties() {
    this.collectionId = true;
    this.position = true;
    this.label = true;
    this.requiered = true;
    this.requieredOnClose = true;
    this.options = true;
    this.defaultValue = true;
    this.availableToCustomers = true;
    this.pendingDeletion = true;
    this.maxColumns = true;
    this.tooltip = true;
    this.availableToReps = true;
    this.type = true;
  }
}

export default CustomFieldDefinitionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
