//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseCorrespondenceAttachment} from '../models/Entities';
//import {ArchivedPurchaseCorrespondenceAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseCorrespondenceAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseCorrespondenceAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseCorrespondenceAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseCorrespondenceAttachment", data, query, loadSpan, rep, ArchivedPurchaseCorrespondenceAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseCorrespondenceAttachment", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseCorrespondenceAttachmentService;

