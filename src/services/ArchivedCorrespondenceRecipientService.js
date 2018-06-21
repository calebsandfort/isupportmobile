//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedCorrespondenceRecipient} from '../models/Entities';
//import {ArchivedCorrespondenceRecipientPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedCorrespondenceRecipientLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedCorrespondenceRecipientService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedCorrespondenceRecipientLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedCorrespondenceRecipient", data, query, loadSpan, rep, ArchivedCorrespondenceRecipient.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedCorrespondenceRecipient", data, query, rep, access_token);
  }
}

export default ArchivedCorrespondenceRecipientService;

