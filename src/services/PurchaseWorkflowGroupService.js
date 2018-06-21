//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {PurchaseWorkflowGroup} from '../models/Entities';
//import {PurchaseWorkflowGroupPropertyNames} from '../models/Entities/PropertyNames';
import {PurchaseWorkflowGroupLoadSpan} from '../models/Entities/LoadSpans';

class PurchaseWorkflowGroupService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?PurchaseWorkflowGroupLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("purchaseWorkflowGroup", data, query, loadSpan, rep, PurchaseWorkflowGroup.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("purchaseWorkflowGroup", data, query, rep, access_token);
  }
}

export default PurchaseWorkflowGroupService;

