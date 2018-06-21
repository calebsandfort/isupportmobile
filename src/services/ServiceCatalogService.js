//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceCatalog} from '../models/Entities';
//import {ServiceCatalogPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceCatalogLoadSpan} from '../models/Entities/LoadSpans';

class ServiceCatalogService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceCatalogLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceCatalog", data, query, loadSpan, rep, ServiceCatalog.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceCatalog", data, query, rep, access_token);
  }
}

export default ServiceCatalogService;

