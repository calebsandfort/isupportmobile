//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceContractStatus} from '../models/Entities';
//import {ServiceContractStatusPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceContractStatusLoadSpan} from '../models/Entities/LoadSpans';

class ServiceContractStatusService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceContractStatusLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceContractStatus", data, query, loadSpan, rep, ServiceContractStatus.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceContractStatus", data, query, rep, access_token);
  }
}

export default ServiceContractStatusService;

