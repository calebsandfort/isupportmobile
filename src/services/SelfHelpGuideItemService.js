//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {SelfHelpGuideItem} from '../models/Entities';
//import {SelfHelpGuideItemPropertyNames} from '../models/Entities/PropertyNames';
import {SelfHelpGuideItemLoadSpan} from '../models/Entities/LoadSpans';

class SelfHelpGuideItemService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?SelfHelpGuideItemLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("selfHelpGuideItem", data, query, loadSpan, rep, SelfHelpGuideItem.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("selfHelpGuideItem", data, query, rep, access_token);
  }
}

export default SelfHelpGuideItemService;

