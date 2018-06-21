//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomerWorkHistory} from '../models/Entities';
//import {CustomerWorkHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {CustomerWorkHistoryLoadSpan} from '../models/Entities/LoadSpans';

class CustomerWorkHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomerWorkHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customerWorkHistory", data, query, loadSpan, rep, CustomerWorkHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customerWorkHistory", data, query, rep, access_token);
  }
}

export default CustomerWorkHistoryService;

