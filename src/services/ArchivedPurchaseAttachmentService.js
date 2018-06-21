//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseAttachment} from '../models/Entities';
//import {ArchivedPurchaseAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseAttachment", data, query, loadSpan, rep, ArchivedPurchaseAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseAttachment", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseAttachmentService;

