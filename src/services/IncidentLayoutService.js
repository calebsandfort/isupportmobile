//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentLayout} from '../models/Entities';
//import {IncidentLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentLayoutLoadSpan} from '../models/Entities/LoadSpans';

class IncidentLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentLayout", data, query, loadSpan, rep, IncidentLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentLayout", data, query, rep, access_token);
  }
}

export default IncidentLayoutService;

