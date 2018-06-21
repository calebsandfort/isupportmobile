//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {FacebookIntegrationInfo} from '../models/Entities';
//import {FacebookIntegrationInfoPropertyNames} from '../models/Entities/PropertyNames';
import {FacebookIntegrationInfoLoadSpan} from '../models/Entities/LoadSpans';

class FacebookIntegrationInfoService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?FacebookIntegrationInfoLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("facebookIntegrationInfo", data, query, loadSpan, rep, FacebookIntegrationInfo.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("facebookIntegrationInfo", data, query, rep, access_token);
  }
}

export default FacebookIntegrationInfoService;

