//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedIncidentAttachment} from '../models/Entities';
//import {ArchivedIncidentAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedIncidentAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedIncidentAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedIncidentAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedIncidentAttachment", data, query, loadSpan, rep, ArchivedIncidentAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedIncidentAttachment", data, query, rep, access_token);
  }
}

export default ArchivedIncidentAttachmentService;

