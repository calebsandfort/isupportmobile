//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeSLAHistory} from '../models/Entities';
//import {ChangeSLAHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeSLAHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeSLAHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeSLAHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeSLAHistory", data, query, loadSpan, rep, ChangeSLAHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeSLAHistory", data, query, rep, access_token);
  }
}

export default ChangeSLAHistoryService;

