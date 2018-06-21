//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {EntityFollowProfile} from '../models/Entities';
//import {EntityFollowProfilePropertyNames} from '../models/Entities/PropertyNames';
import {EntityFollowProfileLoadSpan} from '../models/Entities/LoadSpans';

class EntityFollowProfileService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?EntityFollowProfileLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("entityFollowProfile", data, query, loadSpan, rep, EntityFollowProfile.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("entityFollowProfile", data, query, rep, access_token);
  }
}

export default EntityFollowProfileService;

