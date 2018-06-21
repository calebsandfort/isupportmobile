//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentDeletionShadow} from '../models/Entities';
//import {IncidentDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class IncidentDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentDeletionShadow", data, query, loadSpan, rep, IncidentDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentDeletionShadow", data, query, rep, access_token);
  }
}

export default IncidentDeletionShadowService;

