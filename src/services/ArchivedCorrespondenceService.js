//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedCorrespondence} from '../models/Entities';
//import {ArchivedCorrespondencePropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedCorrespondenceLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedCorrespondenceService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedCorrespondenceLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedCorrespondence", data, query, loadSpan, rep, ArchivedCorrespondence.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedCorrespondence", data, query, rep, access_token);
  }
}

export default ArchivedCorrespondenceService;

