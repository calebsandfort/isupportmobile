//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityTerm} from '../models/Entities';
//import {OpportunityTermPropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityTermLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityTermService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityTermLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityTerm", data, query, loadSpan, rep, OpportunityTerm.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityTerm", data, query, rep, access_token);
  }
}

export default OpportunityTermService;

