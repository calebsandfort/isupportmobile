//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceContractCorrespondenceHistory} from '../models/Entities';
//import {ServiceContractCorrespondenceHistoryPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceContractCorrespondenceHistoryLoadSpan} from '../models/Entities/LoadSpans';

class ServiceContractCorrespondenceHistoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceContractCorrespondenceHistoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceContractCorrespondenceHistory", data, query, loadSpan, rep, ServiceContractCorrespondenceHistory.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceContractCorrespondenceHistory", data, query, rep, access_token);
  }
}

export default ServiceContractCorrespondenceHistoryService;

