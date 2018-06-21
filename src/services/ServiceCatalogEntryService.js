//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ServiceCatalogEntry} from '../models/Entities';
//import {ServiceCatalogEntryPropertyNames} from '../models/Entities/PropertyNames';
import {ServiceCatalogEntryLoadSpan} from '../models/Entities/LoadSpans';

class ServiceCatalogEntryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ServiceCatalogEntryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("serviceCatalogEntry", data, query, loadSpan, rep, ServiceCatalogEntry.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("serviceCatalogEntry", data, query, rep, access_token);
  }
}

export default ServiceCatalogEntryService;

