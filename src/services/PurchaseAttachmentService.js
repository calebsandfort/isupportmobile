//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseAttachment} from '../models/Entities';
//import {PurchaseAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseAttachment", data, query, loadSpan, rep, PurchaseAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseAttachment", data, query, rep, access_token);
  }
}

export default PurchaseAttachmentService;

