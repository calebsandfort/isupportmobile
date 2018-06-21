//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedProblemAsset} from '../models/Entities';
//import {ArchivedProblemAssetPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedProblemAssetLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedProblemAssetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedProblemAssetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedProblemAsset", data, query, loadSpan, rep, ArchivedProblemAsset.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedProblemAsset", data, query, rep, access_token);
  }
}

export default ArchivedProblemAssetService;

