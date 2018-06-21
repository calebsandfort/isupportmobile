//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Urgency} from '../models/Entities';
//import {UrgencyPropertyNames} from '../models/Entities/PropertyNames';
import {UrgencyLoadSpan} from '../models/Entities/LoadSpans';

class UrgencyService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?UrgencyLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("urgency", data, query, loadSpan, rep, Urgency.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("urgency", data, query, rep, access_token);
  }
}

export default UrgencyService;

