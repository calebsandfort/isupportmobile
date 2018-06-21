//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentTemplateAttachment} from '../models/Entities';
//import {IncidentTemplateAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentTemplateAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class IncidentTemplateAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentTemplateAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentTemplateAttachment", data, query, loadSpan, rep, IncidentTemplateAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentTemplateAttachment", data, query, rep, access_token);
  }
}

export default IncidentTemplateAttachmentService;

