//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentCustomerChatSession} from '../models/Entities';
//import {IncidentCustomerChatSessionPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentCustomerChatSessionLoadSpan} from '../models/Entities/LoadSpans';

class IncidentCustomerChatSessionService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentCustomerChatSessionLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentCustomerChatSession", data, query, loadSpan, rep, IncidentCustomerChatSession.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentCustomerChatSession", data, query, rep, access_token);
  }
}

export default IncidentCustomerChatSessionService;

