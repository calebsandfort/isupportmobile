//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseTemplate} from '../models/Entities';
//import {PurchaseTemplatePropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseTemplateLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseTemplateService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseTemplateLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseTemplate", data, query, loadSpan, rep, PurchaseTemplate.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseTemplate", data, query, rep, access_token);
  }
}

export default PurchaseTemplateService;

