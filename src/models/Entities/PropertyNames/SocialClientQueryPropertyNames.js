//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';
import SocialClientOptionsPropertyNames from './SocialClientOptionsPropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';

class SocialClientQueryPropertyNames extends PropertyNamesBase {
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
  get itemCount (): string {
    return super.resolvePropertyName("ItemCount");
  }
  get conditionFiltersXml (): string {
    return super.resolvePropertyName("ConditionFiltersXml");
  }
  get searchText (): string {
    return super.resolvePropertyName("SearchText");
  }
  get searchTextFiltersXml (): string {
    return super.resolvePropertyName("SearchTextFiltersXml");
  }
  get sortExpression (): string {
    return super.resolvePropertyName("SortExpression");
  }
  get entityType (): string {
    return super.resolvePropertyName("EntityType");
  }
  get viewCustomersForType (): string {
    return super.resolvePropertyName("ViewCustomersForType");
  }
  get endUserDesktopDefinition (): EndUserDesktopDefinitionPropertyNames {
    return new EndUserDesktopDefinitionPropertyNames(super.resolvePropertyName("EndUserDesktopDefinition"));
  }
  get socialClientOptions (): SocialClientOptionsPropertyNames {
    return new SocialClientOptionsPropertyNames(super.resolvePropertyName("SocialClientOptions"));
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get customerViewFor (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerViewFor"));
  }
  get category (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Category"));
  }
}

export default SocialClientQueryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
