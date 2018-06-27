//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class CustomNumberDefinitionLoadSpan extends LoadSpanBase {
  enable: boolean;
  autoGenerate: boolean;
  requireOnSave: boolean;
  readOnlyOnceSaved: boolean;
  customLabel: boolean;

  constructor(){
    super();
    this.enable = false;
    this.autoGenerate = false;
    this.requireOnSave = false;
    this.readOnlyOnceSaved = false;
    this.customLabel = false;
  }

  loadAllProperties() {
    this.enable = true;
    this.autoGenerate = true;
    this.requireOnSave = true;
    this.readOnlyOnceSaved = true;
    this.customLabel = true;
  }
}

export default CustomNumberDefinitionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
