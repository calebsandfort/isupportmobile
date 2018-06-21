//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityLineItem} from '../models/Entities';
//import {OpportunityLineItemPropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityLineItemLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityLineItemService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityLineItemLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityLineItem", data, query, loadSpan, rep, OpportunityLineItem.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityLineItem", data, query, rep, access_token);
  }
}

export default OpportunityLineItemService;

