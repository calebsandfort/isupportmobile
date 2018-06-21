//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Company} from '../models/Entities';
//import {CompanyPropertyNames} from '../models/Entities/PropertyNames';
import {CompanyLoadSpan} from '../models/Entities/LoadSpans';

class CompanyService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CompanyLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("company", data, query, loadSpan, rep, Company.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("company", data, query, rep, access_token);
  }
}

export default CompanyService;

