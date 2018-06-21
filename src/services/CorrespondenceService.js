//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Correspondence} from '../models/Entities';
//import {CorrespondencePropertyNames} from '../models/Entities/PropertyNames';
import {CorrespondenceLoadSpan} from '../models/Entities/LoadSpans';

class CorrespondenceService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CorrespondenceLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("correspondence", data, query, loadSpan, rep, Correspondence.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("correspondence", data, query, rep, access_token);
  }
}

export default CorrespondenceService;

