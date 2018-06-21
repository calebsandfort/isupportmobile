//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblemCorrespondence} from '../models/Entities';
//import {ArchivedProblemCorrespondencePropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemCorrespondenceLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemCorrespondenceService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemCorrespondenceLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblemCorrespondence", data, query, loadSpan, rep, ArchivedProblemCorrespondence.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblemCorrespondence", data, query, rep, access_token);
  }
}

export default ArchivedProblemCorrespondenceService;

