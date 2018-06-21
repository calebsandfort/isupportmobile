//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CompanyStatus} from '../models/Entities';
//import {CompanyStatusPropertyNames} from '../models/Entities/PropertyNames';
import {CompanyStatusLoadSpan} from '../models/Entities/LoadSpans';

class CompanyStatusService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CompanyStatusLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("companyStatus", data, query, loadSpan, rep, CompanyStatus.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("companyStatus", data, query, rep, access_token);
  }
}

export default CompanyStatusService;

