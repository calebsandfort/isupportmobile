//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import AccessCirclePropertyNames from './AccessCirclePropertyNames';

class QueryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get viewName (): string {
    return super.resolvePropertyName("ViewName");
  }
  get displayName (): string {
    return super.resolvePropertyName("DisplayName");
  }
  get query (): string {
    return super.resolvePropertyName("Query");
  }
  get categorized (): string {
    return super.resolvePropertyName("Categorized");
  }
  get teamQuery (): string {
    return super.resolvePropertyName("TeamQuery");
  }
  get permissionsAssigneeColumnName (): string {
    return super.resolvePropertyName("PermissionsAssigneeColumnName");
  }
  get permissionsAuthorColumnName (): string {
    return super.resolvePropertyName("PermissionsAuthorColumnName");
  }
  get permissionsGroupColumnName (): string {
    return super.resolvePropertyName("PermissionsGroupColumnName");
  }
  get permissionsLocationColumnName (): string {
    return super.resolvePropertyName("PermissionsLocationColumnName");
  }
  get isCustom (): string {
    return super.resolvePropertyName("IsCustom");
  }
  get staticQuickSearchFields (): string {
    return super.resolvePropertyName("StaticQuickSearchFields");
  }
  get enabled (): string {
    return super.resolvePropertyName("Enabled");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get subfolder (): string {
    return super.resolvePropertyName("Subfolder");
  }
  get mobileEnabled (): string {
    return super.resolvePropertyName("MobileEnabled");
  }
  get isCustomerQuery (): string {
    return super.resolvePropertyName("IsCustomerQuery");
  }
  get linesPerRow (): string {
    return super.resolvePropertyName("LinesPerRow");
  }
  get isAggregateView (): string {
    return super.resolvePropertyName("IsAggregateView");
  }
  get module (): string {
    return super.resolvePropertyName("Module");
  }
  get author (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Author"));
  }
  get accessCircle (): AccessCirclePropertyNames {
    return new AccessCirclePropertyNames(super.resolvePropertyName("AccessCircle"));
  }
}

export default QueryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
