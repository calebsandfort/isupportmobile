//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChangeAttachment} from '../models/Entities';
//import {ArchivedChangeAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChangeAttachment", data, query, loadSpan, rep, ArchivedChangeAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChangeAttachment", data, query, rep, access_token);
  }
}

export default ArchivedChangeAttachmentService;

