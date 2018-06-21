//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {TwitterInfo} from '../models/Entities';
//import {TwitterInfoPropertyNames} from '../models/Entities/PropertyNames';
import {TwitterInfoLoadSpan} from '../models/Entities/LoadSpans';

class TwitterInfoService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TwitterInfoLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("twitterInfo", data, query, loadSpan, rep, TwitterInfo.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("twitterInfo", data, query, rep, access_token);
  }
}

export default TwitterInfoService;

