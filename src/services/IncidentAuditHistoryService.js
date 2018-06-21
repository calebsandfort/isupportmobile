//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentAuditHistory} from '../models/Entities';
//import {IncidentAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentAuditHistory", data, query, loadSpan, rep, IncidentAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentAuditHistory", data, query, rep, access_token);
  }
}

export default IncidentAuditHistoryService;

