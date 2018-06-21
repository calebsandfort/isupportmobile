//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityType} from '../models/Entities';
//import {OpportunityTypePropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityTypeLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityTypeService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityTypeLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityType", data, query, loadSpan, rep, OpportunityType.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityType", data, query, rep, access_token);
  }
}

export default OpportunityTypeService;

