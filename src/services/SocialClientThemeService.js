//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientTheme} from '../models/Entities';
//import {SocialClientThemePropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientThemeLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientThemeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientThemeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientTheme", data, query, loadSpan, rep, SocialClientTheme.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientTheme", data, query, rep, access_token);
  }
}

export default SocialClientThemeService;

