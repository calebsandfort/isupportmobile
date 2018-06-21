//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomerLayout} from '../models/Entities';
//import {CustomerLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {CustomerLayoutLoadSpan} from '../models/Entities/LoadSpans';

class CustomerLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomerLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customerLayout", data, query, loadSpan, rep, CustomerLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customerLayout", data, query, rep, access_token);
  }
}

export default CustomerLayoutService;

