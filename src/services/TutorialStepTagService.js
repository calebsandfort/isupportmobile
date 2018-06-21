//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {TutorialStepTag} from '../models/Entities';
//import {TutorialStepTagPropertyNames} from '../models/Entities/PropertyNames';
import {TutorialStepTagLoadSpan} from '../models/Entities/LoadSpans';

class TutorialStepTagService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TutorialStepTagLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("tutorialStepTag", data, query, loadSpan, rep, TutorialStepTag.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("tutorialStepTag", data, query, rep, access_token);
  }
}

export default TutorialStepTagService;

