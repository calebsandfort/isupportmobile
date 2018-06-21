//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {RepNewsFeedOptions} from '../models/Entities';
//import {RepNewsFeedOptionsPropertyNames} from '../models/Entities/PropertyNames';
import {RepNewsFeedOptionsLoadSpan} from '../models/Entities/LoadSpans';

class RepNewsFeedOptionsService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?RepNewsFeedOptionsLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("repNewsFeedOptions", data, query, loadSpan, rep, RepNewsFeedOptions.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("repNewsFeedOptions", data, query, rep, access_token);
  }
}

export default RepNewsFeedOptionsService;

