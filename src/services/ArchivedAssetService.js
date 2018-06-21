//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedAsset} from '../models/Entities';
//import {ArchivedAssetPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedAssetLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedAssetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedAssetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedAsset", data, query, loadSpan, rep, ArchivedAsset.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedAsset", data, query, rep, access_token);
  }
}

export default ArchivedAssetService;

