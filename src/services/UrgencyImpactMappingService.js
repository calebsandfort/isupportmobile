//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {UrgencyImpactMapping} from '../models/Entities';
//import {UrgencyImpactMappingPropertyNames} from '../models/Entities/PropertyNames';
import {UrgencyImpactMappingLoadSpan} from '../models/Entities/LoadSpans';

class UrgencyImpactMappingService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?UrgencyImpactMappingLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("urgencyImpactMapping", data, query, loadSpan, rep, UrgencyImpactMapping.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("urgencyImpactMapping", data, query, rep, access_token);
  }
}

export default UrgencyImpactMappingService;

