//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceContract} from '../models/Entities';
//import {ServiceContractPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceContractLoadSpan} from '../models/Entities/LoadSpans';

class ServiceContractService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceContractLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceContract", data, query, loadSpan, rep, ServiceContract.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceContract", data, query, rep, access_token);
  }
}

export default ServiceContractService;

