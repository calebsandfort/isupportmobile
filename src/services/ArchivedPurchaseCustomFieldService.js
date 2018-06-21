//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseCustomField} from '../models/Entities';
//import {ArchivedPurchaseCustomFieldPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseCustomFieldLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseCustomFieldService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseCustomFieldLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseCustomField", data, query, loadSpan, rep, ArchivedPurchaseCustomField.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseCustomField", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseCustomFieldService;

