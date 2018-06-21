//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import SocialClientOptionsPropertyNames from './SocialClientOptionsPropertyNames';

class NewsFeedOptionsPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get viewCompanyWorkItems (): string {
    return super.resolvePropertyName("ViewCompanyWorkItems");
  }
  get viewDepartmentWorkItems (): string {
    return super.resolvePropertyName("ViewDepartmentWorkItems");
  }
  get viewLocationWorkItems (): string {
    return super.resolvePropertyName("ViewLocationWorkItems");
  }
  get viewAssociatedGroupsWorkItems (): string {
    return super.resolvePropertyName("ViewAssociatedGroupsWorkItems");
  }
  get viewOthersToNotifyWorkItems (): string {
    return super.resolvePropertyName("ViewOthersToNotifyWorkItems");
  }
  get newsFeedEntityTypes (): string {
    return super.resolvePropertyName("NewsFeedEntityTypes");
  }
  get incidentHistoryTypesToDisplay (): string {
    return super.resolvePropertyName("IncidentHistoryTypesToDisplay");
  }
  get changeHistoryTypesToDisplay (): string {
    return super.resolvePropertyName("ChangeHistoryTypesToDisplay");
  }
  get problemHistoryTypesToDisplay (): string {
    return super.resolvePropertyName("ProblemHistoryTypesToDisplay");
  }
  get purchaseHistoryTypesToDisplay (): string {
    return super.resolvePropertyName("PurchaseHistoryTypesToDisplay");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get socialClientOptions (): SocialClientOptionsPropertyNames {
    return new SocialClientOptionsPropertyNames(super.resolvePropertyName("SocialClientOptions"));
  }
}

export default NewsFeedOptionsPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
