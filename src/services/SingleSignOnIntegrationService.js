//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SingleSignOnIntegration} from '../models/Entities';
//import {SingleSignOnIntegrationPropertyNames} from '../models/Entities/PropertyNames';
import {SingleSignOnIntegrationLoadSpan} from '../models/Entities/LoadSpans';

class SingleSignOnIntegrationService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SingleSignOnIntegrationLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("singleSignOnIntegration", data, query, loadSpan, rep, SingleSignOnIntegration.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("singleSignOnIntegration", data, query, rep, access_token);
  }
}

export default SingleSignOnIntegrationService;

