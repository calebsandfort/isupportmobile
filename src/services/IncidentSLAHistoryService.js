//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentSLAHistory} from '../models/Entities';
//import {IncidentSLAHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentSLAHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentSLAHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentSLAHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentSLAHistory", data, query, loadSpan, rep, IncidentSLAHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentSLAHistory", data, query, rep, access_token);
  }
}

export default IncidentSLAHistoryService;

