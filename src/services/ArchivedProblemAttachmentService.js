//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblemAttachment} from '../models/Entities';
//import {ArchivedProblemAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblemAttachment", data, query, loadSpan, rep, ArchivedProblemAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblemAttachment", data, query, rep, access_token);
  }
}

export default ArchivedProblemAttachmentService;

