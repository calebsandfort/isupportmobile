//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {LinkedInIntegrationInfo} from '../models/Entities';
//import {LinkedInIntegrationInfoPropertyNames} from '../models/Entities/PropertyNames';
import {LinkedInIntegrationInfoLoadSpan} from '../models/Entities/LoadSpans';

class LinkedInIntegrationInfoService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?LinkedInIntegrationInfoLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("linkedInIntegrationInfo", data, query, loadSpan, rep, LinkedInIntegrationInfo.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("linkedInIntegrationInfo", data, query, rep, access_token);
  }
}

export default LinkedInIntegrationInfoService;

