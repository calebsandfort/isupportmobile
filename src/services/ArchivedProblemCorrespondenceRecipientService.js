//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblemCorrespondenceRecipient} from '../models/Entities';
//import {ArchivedProblemCorrespondenceRecipientPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemCorrespondenceRecipientLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemCorrespondenceRecipientService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemCorrespondenceRecipientLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblemCorrespondenceRecipient", data, query, loadSpan, rep, ArchivedProblemCorrespondenceRecipient.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblemCorrespondenceRecipient", data, query, rep, access_token);
  }
}

export default ArchivedProblemCorrespondenceRecipientService;

