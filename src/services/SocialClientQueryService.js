//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SocialClientQuery} from '../models/Entities';
//import {SocialClientQueryPropertyNames} from '../models/Entities/PropertyNames';
import {SocialClientQueryLoadSpan} from '../models/Entities/LoadSpans';

class SocialClientQueryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SocialClientQueryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("socialClientQuery", data, query, loadSpan, rep, SocialClientQuery.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("socialClientQuery", data, query, rep, access_token);
  }
}

export default SocialClientQueryService;

