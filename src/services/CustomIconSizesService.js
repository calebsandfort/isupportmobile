//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomIconSizes} from '../models/Entities';
//import {CustomIconSizesPropertyNames} from '../models/Entities/PropertyNames';
import {CustomIconSizesLoadSpan} from '../models/Entities/LoadSpans';

class CustomIconSizesService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomIconSizesLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customIconSizes", data, query, loadSpan, rep, CustomIconSizes.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customIconSizes", data, query, rep, access_token);
  }
}

export default CustomIconSizesService;

