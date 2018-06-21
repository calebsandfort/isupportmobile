//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChangeCorrespondenceRecipient} from '../models/Entities';
//import {ArchivedChangeCorrespondenceRecipientPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeCorrespondenceRecipientLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeCorrespondenceRecipientService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeCorrespondenceRecipientLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChangeCorrespondenceRecipient", data, query, loadSpan, rep, ArchivedChangeCorrespondenceRecipient.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChangeCorrespondenceRecipient", data, query, rep, access_token);
  }
}

export default ArchivedChangeCorrespondenceRecipientService;

