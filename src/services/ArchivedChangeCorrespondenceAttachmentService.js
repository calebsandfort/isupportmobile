//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChangeCorrespondenceAttachment} from '../models/Entities';
//import {ArchivedChangeCorrespondenceAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeCorrespondenceAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeCorrespondenceAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeCorrespondenceAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChangeCorrespondenceAttachment", data, query, loadSpan, rep, ArchivedChangeCorrespondenceAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChangeCorrespondenceAttachment", data, query, rep, access_token);
  }
}

export default ArchivedChangeCorrespondenceAttachmentService;

