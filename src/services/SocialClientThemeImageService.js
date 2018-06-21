//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientThemeImage} from '../models/Entities';
//import {SocialClientThemeImagePropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientThemeImageLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientThemeImageService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientThemeImageLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientThemeImage", data, query, loadSpan, rep, SocialClientThemeImage.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientThemeImage", data, query, rep, access_token);
  }
}

export default SocialClientThemeImageService;

