//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChangeCorrespondence} from '../models/Entities';
//import {ArchivedChangeCorrespondencePropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeCorrespondenceLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeCorrespondenceService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeCorrespondenceLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChangeCorrespondence", data, query, loadSpan, rep, ArchivedChangeCorrespondence.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChangeCorrespondence", data, query, rep, access_token);
  }
}

export default ArchivedChangeCorrespondenceService;

