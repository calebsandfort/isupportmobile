//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';
import SocialClientOptionsLoadSpan from './SocialClientOptionsLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class SocialClientQueryLoadSpan extends LoadSpanBase {
  name: boolean;
  description: boolean;
  itemCount: boolean;
  conditionFiltersXml: boolean;
  searchText: boolean;
  searchTextFiltersXml: boolean;
  sortExpression: boolean;
  entityType: boolean;
  viewCustomersForType: boolean;
  endUserDesktopDefinition: EndUserDesktopDefinitionLoadSpan;
  socialClientOptions: SocialClientOptionsLoadSpan;
  customer: CustomerLoadSpan;
  customerViewFor: CustomerLoadSpan;
  category: CategoryLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.description = false;
    this.itemCount = false;
    this.conditionFiltersXml = false;
    this.searchText = false;
    this.searchTextFiltersXml = false;
    this.sortExpression = false;
    this.entityType = false;
    this.viewCustomersForType = false;
  }

  get endUserDesktopDefinitionLoadSpan(): EndUserDesktopDefinitionLoadSpan {
    if(!this.endUserDesktopDefinition){
		this.endUserDesktopDefinition = new EndUserDesktopDefinitionLoadSpan();
	}

    return this.endUserDesktopDefinition;
  }

  get socialClientOptionsLoadSpan(): SocialClientOptionsLoadSpan {
    if(!this.socialClientOptions){
		this.socialClientOptions = new SocialClientOptionsLoadSpan();
	}

    return this.socialClientOptions;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get customerViewForLoadSpan(): CustomerLoadSpan {
    if(!this.customerViewFor){
		this.customerViewFor = new CustomerLoadSpan();
	}

    return this.customerViewFor;
  }

  get categoryLoadSpan(): CategoryLoadSpan {
    if(!this.category){
		this.category = new CategoryLoadSpan();
	}

    return this.category;
  }

  loadAllProperties() {
    this.name = true;
    this.description = true;
    this.itemCount = true;
    this.conditionFiltersXml = true;
    this.searchText = true;
    this.searchTextFiltersXml = true;
    this.sortExpression = true;
    this.entityType = true;
    this.viewCustomersForType = true;
  }
}

export default SocialClientQueryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
