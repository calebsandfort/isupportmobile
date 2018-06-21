//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {ProblemAttachment} from '../models/Entities';
//import {ProblemAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {ProblemAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class ProblemAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?ProblemAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("problemAttachment", data, query, loadSpan, rep, ProblemAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("problemAttachment", data, query, rep, access_token);
  }
}

export default ProblemAttachmentService;

