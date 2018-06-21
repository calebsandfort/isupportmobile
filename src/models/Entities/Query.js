//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import AccessCircle from './AccessCircle';
import {QueryEngineModule} from './Enums';

export class Query extends EntityBase {
  viewName: string;
  displayName: string;
  query: string;
  categorized: string;
  teamQuery: string;
  permissionsAssigneeColumnName: string;
  permissionsAuthorColumnName: string;
  permissionsGroupColumnName: string;
  permissionsLocationColumnName: string;
  isCustom: string;
  staticQuickSearchFields: string;
  enabled: string;
  modifiedDate: string;
  subfolder: string;
  mobileEnabled: string;
  isCustomerQuery: string;
  linesPerRow: string;
  isAggregateView: string;
  module: QueryEngineModule;
  author: SupportRepresentative;
  accessCircle: AccessCircle;

  static fromApiEntity(apiQuery:QueryType): Query {
    let query = new Query();
    query.id = apiQuery.id;
    query.viewName = apiQuery.viewName;
    query.displayName = apiQuery.displayName;
    query.query = apiQuery.query;
    query.categorized = apiQuery.categorized;
    query.teamQuery = apiQuery.teamQuery;
    query.permissionsAssigneeColumnName = apiQuery.permissionsAssigneeColumnName;
    query.permissionsAuthorColumnName = apiQuery.permissionsAuthorColumnName;
    query.permissionsGroupColumnName = apiQuery.permissionsGroupColumnName;
    query.permissionsLocationColumnName = apiQuery.permissionsLocationColumnName;
    query.isCustom = apiQuery.isCustom;
    query.staticQuickSearchFields = apiQuery.staticQuickSearchFields;
    query.enabled = apiQuery.enabled;
    query.modifiedDate = apiQuery.modifiedDate;
    query.subfolder = apiQuery.subfolder;
    query.mobileEnabled = apiQuery.mobileEnabled;
    query.isCustomerQuery = apiQuery.isCustomerQuery;
    query.linesPerRow = apiQuery.linesPerRow;
    query.isAggregateView = apiQuery.isAggregateView;
    query.module = QueryEngineModule.enumOrdinalOf(parseInt(apiQuery.module, 10));
    if (apiQuery.author) query.author = SupportRepresentative.fromApiEntity(apiQuery.author);
    if (apiQuery.accessCircle) query.accessCircle = AccessCircle.fromApiEntity(apiQuery.accessCircle);

    return query;
  }
}

export default Query;

export type QueryType = {
  id: number,
  viewName: string;
  displayName: string;
  query: string;
  categorized: string;
  teamQuery: string;
  permissionsAssigneeColumnName: string;
  permissionsAuthorColumnName: string;
  permissionsGroupColumnName: string;
  permissionsLocationColumnName: string;
  isCustom: string;
  staticQuickSearchFields: string;
  enabled: string;
  modifiedDate: string;
  subfolder: string;
  mobileEnabled: string;
  isCustomerQuery: string;
  linesPerRow: string;
  isAggregateView: string;
  module: QueryEngineModule;
  author: SupportRepresentative;
  accessCircle: AccessCircle;
}

