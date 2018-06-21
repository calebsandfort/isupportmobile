//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Category} from '../models/Entities';
//import {CategoryPropertyNames} from '../models/Entities/PropertyNames';
import {CategoryLoadSpan} from '../models/Entities/LoadSpans';

class CategoryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CategoryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("category", data, query, loadSpan, rep, Category.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("category", data, query, rep, access_token);
  }
}

export default CategoryService;

