//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceLevelAgreementMatrix} from '../models/Entities';
//import {ServiceLevelAgreementMatrixPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceLevelAgreementMatrixLoadSpan} from '../models/Entities/LoadSpans';

class ServiceLevelAgreementMatrixService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceLevelAgreementMatrixLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceLevelAgreementMatrix", data, query, loadSpan, rep, ServiceLevelAgreementMatrix.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceLevelAgreementMatrix", data, query, rep, access_token);
  }
}

export default ServiceLevelAgreementMatrixService;

