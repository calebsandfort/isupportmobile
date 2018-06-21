//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {EntityFollowFilter} from '../models/Entities';
//import {EntityFollowFilterPropertyNames} from '../models/Entities/PropertyNames';
import {EntityFollowFilterLoadSpan} from '../models/Entities/LoadSpans';

class EntityFollowFilterService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?EntityFollowFilterLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("entityFollowFilter", data, query, loadSpan, rep, EntityFollowFilter.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("entityFollowFilter", data, query, rep, access_token);
  }
}

export default EntityFollowFilterService;

