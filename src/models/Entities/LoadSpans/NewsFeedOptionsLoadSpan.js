//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import SocialClientOptionsLoadSpan from './SocialClientOptionsLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class NewsFeedOptionsLoadSpan extends LoadSpanBase {
  viewCompanyWorkItems: boolean;
  viewDepartmentWorkItems: boolean;
  viewLocationWorkItems: boolean;
  viewAssociatedGroupsWorkItems: boolean;
  viewOthersToNotifyWorkItems: boolean;
  newsFeedEntityTypes: boolean;
  incidentHistoryTypesToDisplay: boolean;
  changeHistoryTypesToDisplay: boolean;
  problemHistoryTypesToDisplay: boolean;
  purchaseHistoryTypesToDisplay: boolean;
  customer: CustomerLoadSpan;
  socialClientOptions: SocialClientOptionsLoadSpan;

  constructor(){
    super();
    this.viewCompanyWorkItems = false;
    this.viewDepartmentWorkItems = false;
    this.viewLocationWorkItems = false;
    this.viewAssociatedGroupsWorkItems = false;
    this.viewOthersToNotifyWorkItems = false;
    this.newsFeedEntityTypes = false;
    this.incidentHistoryTypesToDisplay = false;
    this.changeHistoryTypesToDisplay = false;
    this.problemHistoryTypesToDisplay = false;
    this.purchaseHistoryTypesToDisplay = false;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get socialClientOptionsLoadSpan(): SocialClientOptionsLoadSpan {
    if(!this.socialClientOptions){
		this.socialClientOptions = new SocialClientOptionsLoadSpan();
	}

    return this.socialClientOptions;
  }

  loadAllProperties() {
    this.viewCompanyWorkItems = true;
    this.viewDepartmentWorkItems = true;
    this.viewLocationWorkItems = true;
    this.viewAssociatedGroupsWorkItems = true;
    this.viewOthersToNotifyWorkItems = true;
    this.newsFeedEntityTypes = true;
    this.incidentHistoryTypesToDisplay = true;
    this.changeHistoryTypesToDisplay = true;
    this.problemHistoryTypesToDisplay = true;
    this.purchaseHistoryTypesToDisplay = true;
  }
}

export default NewsFeedOptionsLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
