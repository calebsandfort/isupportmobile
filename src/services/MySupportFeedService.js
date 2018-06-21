//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {MySupportFeed} from '../models/Entities';
//import {MySupportFeedPropertyNames} from '../models/Entities/PropertyNames';
import {MySupportFeedLoadSpan} from '../models/Entities/LoadSpans';

class MySupportFeedService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?MySupportFeedLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("mySupportFeed", data, query, loadSpan, rep, MySupportFeed.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("mySupportFeed", data, query, rep, access_token);
  }
}

export default MySupportFeedService;

