//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Query} from '../models/Entities';
//import {QueryPropertyNames} from '../models/Entities/PropertyNames';
import {QueryLoadSpan} from '../models/Entities/LoadSpans';

class QueryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?QueryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("query", data, query, loadSpan, rep, Query.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("query", data, query, rep, access_token);
  }
}

export default QueryService;

