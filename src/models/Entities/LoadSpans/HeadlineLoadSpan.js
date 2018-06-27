//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class HeadlineLoadSpan extends LoadSpanBase {
  message: boolean;
  details: boolean;
  expirationDate: boolean;
  createdDate: boolean;
  showInMySupportNotifications: boolean;
  mySupportNotificationMessage: boolean;
  mySupportNotificationStyle: boolean;

  constructor(){
    super();
    this.message = false;
    this.details = false;
    this.expirationDate = false;
    this.createdDate = false;
    this.showInMySupportNotifications = false;
    this.mySupportNotificationMessage = false;
    this.mySupportNotificationStyle = false;
  }

  loadAllProperties() {
    this.message = true;
    this.details = true;
    this.expirationDate = true;
    this.createdDate = true;
    this.showInMySupportNotifications = true;
    this.mySupportNotificationMessage = true;
    this.mySupportNotificationStyle = true;
  }
}

export default HeadlineLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
