//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedPurchaseCorrespondenceRecipient} from '../models/Entities';
//import {ArchivedPurchaseCorrespondenceRecipientPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedPurchaseCorrespondenceRecipientLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedPurchaseCorrespondenceRecipientService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedPurchaseCorrespondenceRecipientLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedPurchaseCorrespondenceRecipient", data, query, loadSpan, rep, ArchivedPurchaseCorrespondenceRecipient.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedPurchaseCorrespondenceRecipient", data, query, rep, access_token);
  }
}

export default ArchivedPurchaseCorrespondenceRecipientService;

