//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Product} from '../models/Entities';
//import {ProductPropertyNames} from '../models/Entities/PropertyNames';
import {ProductLoadSpan} from '../models/Entities/LoadSpans';

class ProductService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProductLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("product", data, query, loadSpan, rep, Product.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("product", data, query, rep, access_token);
  }
}

export default ProductService;

