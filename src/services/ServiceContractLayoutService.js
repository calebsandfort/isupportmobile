//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceContractLayout} from '../models/Entities';
//import {ServiceContractLayoutPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceContractLayoutLoadSpan} from '../models/Entities/LoadSpans';

class ServiceContractLayoutService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceContractLayoutLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceContractLayout", data, query, loadSpan, rep, ServiceContractLayout.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceContractLayout", data, query, rep, access_token);
  }
}

export default ServiceContractLayoutService;

