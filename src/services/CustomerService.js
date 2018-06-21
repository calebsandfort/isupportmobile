//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Customer} from '../models/Entities';
//import {CustomerPropertyNames} from '../models/Entities/PropertyNames';
import {CustomerLoadSpan} from '../models/Entities/LoadSpans';

class CustomerService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomerLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customer", data, query, loadSpan, rep, Customer.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customer", data, query, rep, access_token);
  }
}

export default CustomerService;

