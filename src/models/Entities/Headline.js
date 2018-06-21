//@flow
import EntityBase from './entityBase';
import {DesktopNotificationStyle} from './Enums';

export class Headline extends EntityBase {
  message: string;
  details: string;
  expirationDate: string;
  createdDate: string;
  showInMySupportNotifications: string;
  mySupportNotificationMessage: string;
  mySupportNotificationStyle: DesktopNotificationStyle;

  static fromApiEntity(apiHeadline:HeadlineType): Headline {
    let headline = new Headline();
    headline.id = apiHeadline.id;
    headline.message = apiHeadline.message;
    headline.details = apiHeadline.details;
    headline.expirationDate = apiHeadline.expirationDate;
    headline.createdDate = apiHeadline.createdDate;
    headline.showInMySupportNotifications = apiHeadline.showInMySupportNotifications;
    headline.mySupportNotificationMessage = apiHeadline.mySupportNotificationMessage;
    headline.mySupportNotificationStyle = DesktopNotificationStyle.enumOrdinalOf(parseInt(apiHeadline.mySupportNotificationStyle, 10));

    return headline;
  }
}

export default Headline;

export type HeadlineType = {
  id: number,
  message: string;
  details: string;
  expirationDate: string;
  createdDate: string;
  showInMySupportNotifications: string;
  mySupportNotificationMessage: string;
  mySupportNotificationStyle: DesktopNotificationStyle;
}

