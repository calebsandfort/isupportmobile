//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentCustomerChatHistory} from '../models/Entities';
//import {IncidentCustomerChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentCustomerChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentCustomerChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentCustomerChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentCustomerChatHistory", data, query, loadSpan, rep, IncidentCustomerChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentCustomerChatHistory", data, query, rep, access_token);
  }
}

export default IncidentCustomerChatHistoryService;

