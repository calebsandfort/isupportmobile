//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientOptions} from '../models/Entities';
//import {SocialClientOptionsPropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientOptionsLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientOptionsService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientOptionsLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientOptions", data, query, loadSpan, rep, SocialClientOptions.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientOptions", data, query, rep, access_token);
  }
}

export default SocialClientOptionsService;

