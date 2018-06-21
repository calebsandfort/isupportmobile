//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {OpportunityAttachment} from '../models/Entities';
//import {OpportunityAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {OpportunityAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class OpportunityAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?OpportunityAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("opportunityAttachment", data, query, loadSpan, rep, OpportunityAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("opportunityAttachment", data, query, rep, access_token);
  }
}

export default OpportunityAttachmentService;

