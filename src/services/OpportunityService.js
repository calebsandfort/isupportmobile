//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Opportunity} from '../models/Entities';
//import {OpportunityPropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunity", data, query, loadSpan, rep, Opportunity.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunity", data, query, rep, access_token);
  }
}

export default OpportunityService;

