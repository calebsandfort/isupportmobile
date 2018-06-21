//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentCustomerChatAttachment} from '../models/Entities';
//import {IncidentCustomerChatAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentCustomerChatAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class IncidentCustomerChatAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentCustomerChatAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentCustomerChatAttachment", data, query, loadSpan, rep, IncidentCustomerChatAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentCustomerChatAttachment", data, query, rep, access_token);
  }
}

export default IncidentCustomerChatAttachmentService;

