//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {CorrespondenceAttachment} from '../models/Entities';
//import {CorrespondenceAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {CorrespondenceAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class CorrespondenceAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?CorrespondenceAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("correspondenceAttachment", data, query, loadSpan, rep, CorrespondenceAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("correspondenceAttachment", data, query, rep, access_token);
  }
}

export default CorrespondenceAttachmentService;

