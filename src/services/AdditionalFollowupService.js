//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {AdditionalFollowup} from '../models/Entities';
//import {AdditionalFollowupPropertyNames} from '../models/Entities/PropertyNames';
import {AdditionalFollowupLoadSpan} from '../models/Entities/LoadSpans';

class AdditionalFollowupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?AdditionalFollowupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("additionalFollowup", data, query, loadSpan, rep, AdditionalFollowup.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("additionalFollowup", data, query, rep, access_token);
  }
}

export default AdditionalFollowupService;

