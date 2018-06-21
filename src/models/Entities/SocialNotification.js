//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import SocialClientOptions from './SocialClientOptions';
import {CustomerNotificationTypes} from './Enums';

export class SocialNotification extends EntityBase {
  number: string;
  customerNotificationTypes: CustomerNotificationTypes;
  customer: Customer;
  socialClientOptions: SocialClientOptions;

  static fromApiEntity(apiSocialNotification:SocialNotificationType): SocialNotification {
    let socialNotification = new SocialNotification();
    socialNotification.id = apiSocialNotification.id;
    socialNotification.number = apiSocialNotification.number;
    socialNotification.customerNotificationTypes = CustomerNotificationTypes.enumOrdinalOf(parseInt(apiSocialNotification.customerNotificationTypes, 10));
    if (apiSocialNotification.customer) socialNotification.customer = Customer.fromApiEntity(apiSocialNotification.customer);
    if (apiSocialNotification.socialClientOptions) socialNotification.socialClientOptions = SocialClientOptions.fromApiEntity(apiSocialNotification.socialClientOptions);

    return socialNotification;
  }
}

export default SocialNotification;

export type SocialNotificationType = {
  id: number,
  number: string;
  customerNotificationTypes: CustomerNotificationTypes;
  customer: Customer;
  socialClientOptions: SocialClientOptions;
}

