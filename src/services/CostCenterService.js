//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CostCenter} from '../models/Entities';
//import {CostCenterPropertyNames} from '../models/Entities/PropertyNames';
import {CostCenterLoadSpan} from '../models/Entities/LoadSpans';

class CostCenterService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CostCenterLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("costCenter", data, query, loadSpan, rep, CostCenter.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("costCenter", data, query, rep, access_token);
  }
}

export default CostCenterService;

