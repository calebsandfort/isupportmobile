//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientWallPost} from '../models/Entities';
//import {SocialClientWallPostPropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientWallPostLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientWallPostService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientWallPostLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientWallPost", data, query, loadSpan, rep, SocialClientWallPost.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientWallPost", data, query, rep, access_token);
  }
}

export default SocialClientWallPostService;

