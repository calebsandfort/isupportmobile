//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedCorrespondenceAttachment} from '../models/Entities';
//import {ArchivedCorrespondenceAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedCorrespondenceAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedCorrespondenceAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedCorrespondenceAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedCorrespondenceAttachment", data, query, loadSpan, rep, ArchivedCorrespondenceAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedCorrespondenceAttachment", data, query, rep, access_token);
  }
}

export default ArchivedCorrespondenceAttachmentService;

