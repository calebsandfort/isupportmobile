//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ChangeTemplate} from '../models/Entities';
//import {ChangeTemplatePropertyNames} from '../models/Entities/PropertyNames';
import {ChangeTemplateLoadSpan} from '../models/Entities/LoadSpans';

class ChangeTemplateService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ChangeTemplateLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("changeTemplate", data, query, loadSpan, rep, ChangeTemplate.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("changeTemplate", data, query, rep, access_token);
  }
}

export default ChangeTemplateService;

