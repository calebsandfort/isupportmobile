//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceContractAuditHistory} from '../models/Entities';
//import {ServiceContractAuditHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceContractAuditHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ServiceContractAuditHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceContractAuditHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceContractAuditHistory", data, query, loadSpan, rep, ServiceContractAuditHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceContractAuditHistory", data, query, rep, access_token);
  }
}

export default ServiceContractAuditHistoryService;

