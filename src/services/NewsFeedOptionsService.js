//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {NewsFeedOptions} from '../models/Entities';
//import {NewsFeedOptionsPropertyNames} from '../models/Entities/PropertyNames';
import {NewsFeedOptionsLoadSpan} from '../models/Entities/LoadSpans';

class NewsFeedOptionsService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?NewsFeedOptionsLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("newsFeedOptions", data, query, loadSpan, rep, NewsFeedOptions.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("newsFeedOptions", data, query, rep, access_token);
  }
}

export default NewsFeedOptionsService;

