//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {VendorProduct} from '../models/Entities';
//import {VendorProductPropertyNames} from '../models/Entities/PropertyNames';
import {VendorProductLoadSpan} from '../models/Entities/LoadSpans';

class VendorProductService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?VendorProductLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("vendorProduct", data, query, loadSpan, rep, VendorProduct.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("vendorProduct", data, query, rep, access_token);
  }
}

export default VendorProductService;

