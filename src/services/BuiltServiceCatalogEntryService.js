//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {BuiltServiceCatalogEntry} from '../models/Entities';
//import {BuiltServiceCatalogEntryPropertyNames} from '../models/Entities/PropertyNames';
import {BuiltServiceCatalogEntryLoadSpan} from '../models/Entities/LoadSpans';

class BuiltServiceCatalogEntryService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?BuiltServiceCatalogEntryLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("builtServiceCatalogEntry", data, query, loadSpan, rep, BuiltServiceCatalogEntry.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("builtServiceCatalogEntry", data, query, rep, access_token);
  }
}

export default BuiltServiceCatalogEntryService;

