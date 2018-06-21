//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';

class ApprovalCyclePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get numberOfVerdictsToApprove (): string {
    return super.resolvePropertyName("NumberOfVerdictsToApprove");
  }
  get numberOfVerdictsToDecline (): string {
    return super.resolvePropertyName("NumberOfVerdictsToDecline");
  }
  get notificationOrderType (): string {
    return super.resolvePropertyName("NotificationOrderType");
  }
}

export default ApprovalCyclePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
