//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import SocialClientOptionsPropertyNames from './SocialClientOptionsPropertyNames';

class SocialNotificationPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get customerNotificationTypes (): string {
    return super.resolvePropertyName("CustomerNotificationTypes");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get socialClientOptions (): SocialClientOptionsPropertyNames {
    return new SocialClientOptionsPropertyNames(super.resolvePropertyName("SocialClientOptions"));
  }
}

export default SocialNotificationPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
