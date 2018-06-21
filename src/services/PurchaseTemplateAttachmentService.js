//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseTemplateAttachment} from '../models/Entities';
//import {PurchaseTemplateAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseTemplateAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseTemplateAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseTemplateAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseTemplateAttachment", data, query, loadSpan, rep, PurchaseTemplateAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseTemplateAttachment", data, query, rep, access_token);
  }
}

export default PurchaseTemplateAttachmentService;

