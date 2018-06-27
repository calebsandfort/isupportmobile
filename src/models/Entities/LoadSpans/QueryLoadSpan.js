//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import AccessCircleLoadSpan from './AccessCircleLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class QueryLoadSpan extends LoadSpanBase {
  viewName: boolean;
  displayName: boolean;
  query: boolean;
  categorized: boolean;
  teamQuery: boolean;
  permissionsAssigneeColumnName: boolean;
  permissionsAuthorColumnName: boolean;
  permissionsGroupColumnName: boolean;
  permissionsLocationColumnName: boolean;
  isCustom: boolean;
  staticQuickSearchFields: boolean;
  enabled: boolean;
  modifiedDate: boolean;
  subfolder: boolean;
  mobileEnabled: boolean;
  isCustomerQuery: boolean;
  linesPerRow: boolean;
  isAggregateView: boolean;
  module: boolean;
  author: SupportRepresentativeLoadSpan;
  accessCircle: AccessCircleLoadSpan;

  constructor(){
    super();
    this.viewName = false;
    this.displayName = false;
    this.query = false;
    this.categorized = false;
    this.teamQuery = false;
    this.permissionsAssigneeColumnName = false;
    this.permissionsAuthorColumnName = false;
    this.permissionsGroupColumnName = false;
    this.permissionsLocationColumnName = false;
    this.isCustom = false;
    this.staticQuickSearchFields = false;
    this.enabled = false;
    this.modifiedDate = false;
    this.subfolder = false;
    this.mobileEnabled = false;
    this.isCustomerQuery = false;
    this.linesPerRow = false;
    this.isAggregateView = false;
    this.module = false;
  }

  get authorLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.author){
		this.author = new SupportRepresentativeLoadSpan();
	}

    return this.author;
  }

  get accessCircleLoadSpan(): AccessCircleLoadSpan {
    if(!this.accessCircle){
		this.accessCircle = new AccessCircleLoadSpan();
	}

    return this.accessCircle;
  }

  loadAllProperties() {
    this.viewName = true;
    this.displayName = true;
    this.query = true;
    this.categorized = true;
    this.teamQuery = true;
    this.permissionsAssigneeColumnName = true;
    this.permissionsAuthorColumnName = true;
    this.permissionsGroupColumnName = true;
    this.permissionsLocationColumnName = true;
    this.isCustom = true;
    this.staticQuickSearchFields = true;
    this.enabled = true;
    this.modifiedDate = true;
    this.subfolder = true;
    this.mobileEnabled = true;
    this.isCustomerQuery = true;
    this.linesPerRow = true;
    this.isAggregateView = true;
    this.module = true;
  }
}

export default QueryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
