//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ArchivedChangeAsset} from '../models/Entities';
//import {ArchivedChangeAssetPropertyNames} from '../models/Entities/PropertyNames';
import {ArchivedChangeAssetLoadSpan} from '../models/Entities/LoadSpans';

class ArchivedChangeAssetService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ArchivedChangeAssetLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("archivedChangeAsset", data, query, loadSpan, rep, ArchivedChangeAsset.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("archivedChangeAsset", data, query, rep, access_token);
  }
}

export default ArchivedChangeAssetService;

