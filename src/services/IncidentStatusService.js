//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentStatus} from '../models/Entities';
//import {IncidentStatusPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentStatusLoadSpan} from '../models/Entities/LoadSpans';

class IncidentStatusService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentStatusLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentStatus", data, query, loadSpan, rep, IncidentStatus.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentStatus", data, query, rep, access_token);
  }
}

export default IncidentStatusService;

