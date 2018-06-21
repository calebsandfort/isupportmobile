//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityStage} from '../models/Entities';
//import {OpportunityStagePropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityStageLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityStageService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityStageLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityStage", data, query, loadSpan, rep, OpportunityStage.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityStage", data, query, rep, access_token);
  }
}

export default OpportunityStageService;

