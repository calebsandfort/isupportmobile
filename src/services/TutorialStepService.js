//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {TutorialStep} from '../models/Entities';
//import {TutorialStepPropertyNames} from '../models/Entities/PropertyNames';
import {TutorialStepLoadSpan} from '../models/Entities/LoadSpans';

class TutorialStepService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?TutorialStepLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("tutorialStep", data, query, loadSpan, rep, TutorialStep.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("tutorialStep", data, query, rep, access_token);
  }
}

export default TutorialStepService;

