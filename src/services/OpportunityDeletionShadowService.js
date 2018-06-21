//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityDeletionShadow} from '../models/Entities';
//import {OpportunityDeletionShadowPropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityDeletionShadowLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityDeletionShadowService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityDeletionShadowLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityDeletionShadow", data, query, loadSpan, rep, OpportunityDeletionShadow.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityDeletionShadow", data, query, rep, access_token);
  }
}

export default OpportunityDeletionShadowService;

