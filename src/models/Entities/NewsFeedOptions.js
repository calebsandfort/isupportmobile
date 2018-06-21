//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import SocialClientOptions from './SocialClientOptions';
import {EntityTypes} from './Enums';
import {NewHistoryTypes} from './Enums';

export class NewsFeedOptions extends EntityBase {
  viewCompanyWorkItems: string;
  viewDepartmentWorkItems: string;
  viewLocationWorkItems: string;
  viewAssociatedGroupsWorkItems: string;
  viewOthersToNotifyWorkItems: string;
  newsFeedEntityTypes: EntityTypes;
  incidentHistoryTypesToDisplay: NewHistoryTypes;
  changeHistoryTypesToDisplay: NewHistoryTypes;
  problemHistoryTypesToDisplay: NewHistoryTypes;
  purchaseHistoryTypesToDisplay: NewHistoryTypes;
  customer: Customer;
  socialClientOptions: SocialClientOptions;

  static fromApiEntity(apiNewsFeedOptions:NewsFeedOptionsType): NewsFeedOptions {
    let newsFeedOptions = new NewsFeedOptions();
    newsFeedOptions.id = apiNewsFeedOptions.id;
    newsFeedOptions.viewCompanyWorkItems = apiNewsFeedOptions.viewCompanyWorkItems;
    newsFeedOptions.viewDepartmentWorkItems = apiNewsFeedOptions.viewDepartmentWorkItems;
    newsFeedOptions.viewLocationWorkItems = apiNewsFeedOptions.viewLocationWorkItems;
    newsFeedOptions.viewAssociatedGroupsWorkItems = apiNewsFeedOptions.viewAssociatedGroupsWorkItems;
    newsFeedOptions.viewOthersToNotifyWorkItems = apiNewsFeedOptions.viewOthersToNotifyWorkItems;
    newsFeedOptions.newsFeedEntityTypes = EntityTypes.enumOrdinalOf(parseInt(apiNewsFeedOptions.newsFeedEntityTypes, 10));
    newsFeedOptions.incidentHistoryTypesToDisplay = NewHistoryTypes.enumOrdinalOf(parseInt(apiNewsFeedOptions.incidentHistoryTypesToDisplay, 10));
    newsFeedOptions.changeHistoryTypesToDisplay = NewHistoryTypes.enumOrdinalOf(parseInt(apiNewsFeedOptions.changeHistoryTypesToDisplay, 10));
    newsFeedOptions.problemHistoryTypesToDisplay = NewHistoryTypes.enumOrdinalOf(parseInt(apiNewsFeedOptions.problemHistoryTypesToDisplay, 10));
    newsFeedOptions.purchaseHistoryTypesToDisplay = NewHistoryTypes.enumOrdinalOf(parseInt(apiNewsFeedOptions.purchaseHistoryTypesToDisplay, 10));
    if (apiNewsFeedOptions.customer) newsFeedOptions.customer = Customer.fromApiEntity(apiNewsFeedOptions.customer);
    if (apiNewsFeedOptions.socialClientOptions) newsFeedOptions.socialClientOptions = SocialClientOptions.fromApiEntity(apiNewsFeedOptions.socialClientOptions);

    return newsFeedOptions;
  }
}

export default NewsFeedOptions;

export type NewsFeedOptionsType = {
  id: number,
  viewCompanyWorkItems: string;
  viewDepartmentWorkItems: string;
  viewLocationWorkItems: string;
  viewAssociatedGroupsWorkItems: string;
  viewOthersToNotifyWorkItems: string;
  newsFeedEntityTypes: EntityTypes;
  incidentHistoryTypesToDisplay: NewHistoryTypes;
  changeHistoryTypesToDisplay: NewHistoryTypes;
  problemHistoryTypesToDisplay: NewHistoryTypes;
  purchaseHistoryTypesToDisplay: NewHistoryTypes;
  customer: Customer;
  socialClientOptions: SocialClientOptions;
}

