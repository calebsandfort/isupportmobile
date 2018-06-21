//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';

class DeviceDetectionRulePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get displayName (): string {
    return super.resolvePropertyName("DisplayName");
  }
  get pattern (): string {
    return super.resolvePropertyName("Pattern");
  }
  get exactMatch (): string {
    return super.resolvePropertyName("ExactMatch");
  }
  get useReqularExpressions (): string {
    return super.resolvePropertyName("UseReqularExpressions");
  }
  get parent (): DeviceDetectionRulePropertyNames {
    return new DeviceDetectionRulePropertyNames(super.resolvePropertyName("Parent"));
  }
}

export default DeviceDetectionRulePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
