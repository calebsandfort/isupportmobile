//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {TemplateProduct} from '../models/Entities';
//import {TemplateProductPropertyNames} from '../models/Entities/PropertyNames';
import {TemplateProductLoadSpan} from '../models/Entities/LoadSpans';

class TemplateProductService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TemplateProductLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("templateProduct", data, query, loadSpan, rep, TemplateProduct.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("templateProduct", data, query, rep, access_token);
  }
}

export default TemplateProductService;

