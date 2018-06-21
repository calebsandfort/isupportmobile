//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblemCorrespondenceAttachment} from '../models/Entities';
//import {ArchivedProblemCorrespondenceAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemCorrespondenceAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemCorrespondenceAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemCorrespondenceAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblemCorrespondenceAttachment", data, query, loadSpan, rep, ArchivedProblemCorrespondenceAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblemCorrespondenceAttachment", data, query, rep, access_token);
  }
}

export default ArchivedProblemCorrespondenceAttachmentService;

