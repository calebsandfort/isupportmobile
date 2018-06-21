//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {RepWorkHistory} from '../models/Entities';
//import {RepWorkHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {RepWorkHistoryLoadSpan} from '../models/Entities/LoadSpans';

class RepWorkHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?RepWorkHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("repWorkHistory", data, query, loadSpan, rep, RepWorkHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("repWorkHistory", data, query, rep, access_token);
  }
}

export default RepWorkHistoryService;

