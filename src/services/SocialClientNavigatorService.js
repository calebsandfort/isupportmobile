//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientNavigator} from '../models/Entities';
//import {SocialClientNavigatorPropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientNavigatorLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientNavigatorService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientNavigatorLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientNavigator", data, query, loadSpan, rep, SocialClientNavigator.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientNavigator", data, query, rep, access_token);
  }
}

export default SocialClientNavigatorService;

