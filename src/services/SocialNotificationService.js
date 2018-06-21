//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialNotification} from '../models/Entities';
//import {SocialNotificationPropertyNames} from '../models/Entities/PropertyNames';
import {SocialNotificationLoadSpan} from '../models/Entities/LoadSpans';

class SocialNotificationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialNotificationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialNotification", data, query, loadSpan, rep, SocialNotification.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialNotification", data, query, rep, access_token);
  }
}

export default SocialNotificationService;

