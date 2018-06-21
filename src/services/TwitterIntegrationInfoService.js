//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {TwitterIntegrationInfo} from '../models/Entities';
//import {TwitterIntegrationInfoPropertyNames} from '../models/Entities/PropertyNames';
import {TwitterIntegrationInfoLoadSpan} from '../models/Entities/LoadSpans';

class TwitterIntegrationInfoService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TwitterIntegrationInfoLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("twitterIntegrationInfo", data, query, loadSpan, rep, TwitterIntegrationInfo.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("twitterIntegrationInfo", data, query, rep, access_token);
  }
}

export default TwitterIntegrationInfoService;

