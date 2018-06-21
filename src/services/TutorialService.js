//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {Tutorial} from '../models/Entities';
//import {TutorialPropertyNames} from '../models/Entities/PropertyNames';
import {TutorialLoadSpan} from '../models/Entities/LoadSpans';

class TutorialService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TutorialLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("tutorial", data, query, loadSpan, rep, Tutorial.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("tutorial", data, query, rep, access_token);
  }
}

export default TutorialService;

