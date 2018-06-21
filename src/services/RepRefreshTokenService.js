//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {RepRefreshToken} from '../models/Entities';
//import {RepRefreshTokenPropertyNames} from '../models/Entities/PropertyNames';
import {RepRefreshTokenLoadSpan} from '../models/Entities/LoadSpans';

class RepRefreshTokenService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?RepRefreshTokenLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("repRefreshToken", data, query, loadSpan, rep, RepRefreshToken.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("repRefreshToken", data, query, rep, access_token);
  }
}

export default RepRefreshTokenService;

