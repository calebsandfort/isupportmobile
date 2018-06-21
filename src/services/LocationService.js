//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Location} from '../models/Entities';
//import {LocationPropertyNames} from '../models/Entities/PropertyNames';
import {LocationLoadSpan} from '../models/Entities/LoadSpans';

class LocationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?LocationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("location", data, query, loadSpan, rep, Location.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("location", data, query, rep, access_token);
  }
}

export default LocationService;

