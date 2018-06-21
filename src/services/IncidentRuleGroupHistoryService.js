//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentRuleGroupHistory} from '../models/Entities';
//import {IncidentRuleGroupHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentRuleGroupHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentRuleGroupHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentRuleGroupHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentRuleGroupHistory", data, query, loadSpan, rep, IncidentRuleGroupHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentRuleGroupHistory", data, query, rep, access_token);
  }
}

export default IncidentRuleGroupHistoryService;

