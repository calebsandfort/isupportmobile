//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {IncidentAttachment} from '../models/Entities';
//import {IncidentAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {IncidentAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class IncidentAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?IncidentAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("incidentAttachment", data, query, loadSpan, rep, IncidentAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("incidentAttachment", data, query, rep, access_token);
  }
}

export default IncidentAttachmentService;

