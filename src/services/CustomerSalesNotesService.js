//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CustomerSalesNotes} from '../models/Entities';
//import {CustomerSalesNotesPropertyNames} from '../models/Entities/PropertyNames';
import {CustomerSalesNotesLoadSpan} from '../models/Entities/LoadSpans';

class CustomerSalesNotesService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CustomerSalesNotesLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("customerSalesNotes", data, query, loadSpan, rep, CustomerSalesNotes.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("customerSalesNotes", data, query, rep, access_token);
  }
}

export default CustomerSalesNotesService;

