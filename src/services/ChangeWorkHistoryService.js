//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeWorkHistory} from '../models/Entities';
//import {ChangeWorkHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ChangeWorkHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ChangeWorkHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeWorkHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeWorkHistory", data, query, loadSpan, rep, ChangeWorkHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeWorkHistory", data, query, rep, access_token);
  }
}

export default ChangeWorkHistoryService;

