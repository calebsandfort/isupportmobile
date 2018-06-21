//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {UserAvatarImage} from '../models/Entities';
//import {UserAvatarImagePropertyNames} from '../models/Entities/PropertyNames';
import {UserAvatarImageLoadSpan} from '../models/Entities/LoadSpans';

class UserAvatarImageService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?UserAvatarImageLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("userAvatarImage", data, query, loadSpan, rep, UserAvatarImage.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("userAvatarImage", data, query, rep, access_token);
  }
}

export default UserAvatarImageService;

