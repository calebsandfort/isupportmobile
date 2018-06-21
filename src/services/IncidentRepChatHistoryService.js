//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentRepChatHistory} from '../models/Entities';
//import {IncidentRepChatHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentRepChatHistoryLoadSpan} from '../models/Entities/LoadSpans';

class IncidentRepChatHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentRepChatHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentRepChatHistory", data, query, loadSpan, rep, IncidentRepChatHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentRepChatHistory", data, query, rep, access_token);
  }
}

export default IncidentRepChatHistoryService;

