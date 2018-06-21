//@flow
import EntityBase from './entityBase';
import EndUserDesktopDefinition from './EndUserDesktopDefinition';
import SocialClientOptions from './SocialClientOptions';
import Customer from './Customer';
import Category from './Category';
import {EntityTypes} from './Enums';
import {ViewCustomersForTypes} from './Enums';

export class SocialClientQuery extends EntityBase {
  name: string;
  description: string;
  itemCount: string;
  conditionFiltersXml: string;
  searchText: string;
  searchTextFiltersXml: string;
  sortExpression: string;
  entityType: EntityTypes;
  viewCustomersForType: ViewCustomersForTypes;
  endUserDesktopDefinition: EndUserDesktopDefinition;
  socialClientOptions: SocialClientOptions;
  customer: Customer;
  customerViewFor: Customer;
  category: Category;

  static fromApiEntity(apiSocialClientQuery:SocialClientQueryType): SocialClientQuery {
    let socialClientQuery = new SocialClientQuery();
    socialClientQuery.id = apiSocialClientQuery.id;
    socialClientQuery.name = apiSocialClientQuery.name;
    socialClientQuery.description = apiSocialClientQuery.description;
    socialClientQuery.itemCount = apiSocialClientQuery.itemCount;
    socialClientQuery.conditionFiltersXml = apiSocialClientQuery.conditionFiltersXml;
    socialClientQuery.searchText = apiSocialClientQuery.searchText;
    socialClientQuery.searchTextFiltersXml = apiSocialClientQuery.searchTextFiltersXml;
    socialClientQuery.sortExpression = apiSocialClientQuery.sortExpression;
    socialClientQuery.entityType = EntityTypes.enumOrdinalOf(parseInt(apiSocialClientQuery.entityType, 10));
    socialClientQuery.viewCustomersForType = ViewCustomersForTypes.enumOrdinalOf(parseInt(apiSocialClientQuery.viewCustomersForType, 10));
    if (apiSocialClientQuery.endUserDesktopDefinition) socialClientQuery.endUserDesktopDefinition = EndUserDesktopDefinition.fromApiEntity(apiSocialClientQuery.endUserDesktopDefinition);
    if (apiSocialClientQuery.socialClientOptions) socialClientQuery.socialClientOptions = SocialClientOptions.fromApiEntity(apiSocialClientQuery.socialClientOptions);
    if (apiSocialClientQuery.customer) socialClientQuery.customer = Customer.fromApiEntity(apiSocialClientQuery.customer);
    if (apiSocialClientQuery.customerViewFor) socialClientQuery.customerViewFor = Customer.fromApiEntity(apiSocialClientQuery.customerViewFor);
    if (apiSocialClientQuery.category) socialClientQuery.category = Category.fromApiEntity(apiSocialClientQuery.category);

    return socialClientQuery;
  }
}

export default SocialClientQuery;

export type SocialClientQueryType = {
  id: number,
  name: string;
  description: string;
  itemCount: string;
  conditionFiltersXml: string;
  searchText: string;
  searchTextFiltersXml: string;
  sortExpression: string;
  entityType: EntityTypes;
  viewCustomersForType: ViewCustomersForTypes;
  endUserDesktopDefinition: EndUserDesktopDefinition;
  socialClientOptions: SocialClientOptions;
  customer: Customer;
  customerViewFor: Customer;
  category: Category;
}

