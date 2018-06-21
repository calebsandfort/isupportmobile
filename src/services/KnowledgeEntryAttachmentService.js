//@flow
import iSupportService from './iSupportService';
import {CollectionResponse, CountResponse, ServiceError, EntityQuery,
//  SearchFilter, SearchFilterCondition
} from '../models';
import {KnowledgeEntryAttachment} from '../models/Entities';
//import {KnowledgeEntryAttachmentPropertyNames} from '../models/Entities/PropertyNames';
import {KnowledgeEntryAttachmentLoadSpan} from '../models/Entities/LoadSpans';

class KnowledgeEntryAttachmentService {
  static executeGetCollection(data: ?any, query: ?EntityQuery, loadSpan: ?KnowledgeEntryAttachmentLoadSpan, rep: ?any, access_token: string): Promise<CollectionResponse | ServiceError>{
    return iSupportService.executeGetCollection("knowledgeEntryAttachment", data, query, loadSpan, rep, KnowledgeEntryAttachment.fromApiEntity, access_token);
  }

  static executeGetCount(data: ?any, query: ?any, rep: ?any, access_token: string): Promise<CountResponse | ServiceError>{
    return iSupportService.executeGetCount("knowledgeEntryAttachment", data, query, rep, access_token);
  }
}

export default KnowledgeEntryAttachmentService;

