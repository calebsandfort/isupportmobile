//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

export class DeviceDetectionRuleLoadSpan {
  displayName: boolean;
  pattern: boolean;
  exactMatch: boolean;
  useReqularExpressions: boolean;
  parent: DeviceDetectionRuleLoadSpan;

  constructor(){
    this.displayName = false;
    this.pattern = false;
    this.exactMatch = false;
    this.useReqularExpressions = false;
  }

  get parentLoadSpan(): DeviceDetectionRuleLoadSpan {
    if(!this.parent){
		this.parent = new DeviceDetectionRuleLoadSpan();
	}

    return this.parent;
  }

  loadAllProperties() {
    this.displayName = true;
    this.pattern = true;
    this.exactMatch = true;
    this.useReqularExpressions = true;
  }
}

export default DeviceDetectionRuleLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
