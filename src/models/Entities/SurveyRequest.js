//@flow
import EntityBase from './entityBase';
import Survey from './Survey';
import Customer from './Customer';
import {SurveyRequestMethods} from './Enums';
import {SurveyStatuses} from './Enums';

export class SurveyRequest extends EntityBase {
  guid: string;
  incidentNumber: string;
  dateSent: string;
  pendingDeletion: string;
  method: SurveyRequestMethods;
  status: SurveyStatuses;
  survey: Survey;
  recipient: Customer;

  static fromApiEntity(apiSurveyRequest:SurveyRequestType): SurveyRequest {
    let surveyRequest = new SurveyRequest();
    surveyRequest.id = apiSurveyRequest.id;
    surveyRequest.guid = apiSurveyRequest.guid;
    surveyRequest.incidentNumber = apiSurveyRequest.incidentNumber;
    surveyRequest.dateSent = apiSurveyRequest.dateSent;
    surveyRequest.pendingDeletion = apiSurveyRequest.pendingDeletion;
    surveyRequest.method = SurveyRequestMethods.enumOrdinalOf(parseInt(apiSurveyRequest.method, 10));
    surveyRequest.status = SurveyStatuses.enumOrdinalOf(parseInt(apiSurveyRequest.status, 10));
    if (apiSurveyRequest.survey) surveyRequest.survey = Survey.fromApiEntity(apiSurveyRequest.survey);
    if (apiSurveyRequest.recipient) surveyRequest.recipient = Customer.fromApiEntity(apiSurveyRequest.recipient);

    return surveyRequest;
  }
}

export default SurveyRequest;

export type SurveyRequestType = {
  id: number,
  guid: string;
  incidentNumber: string;
  dateSent: string;
  pendingDeletion: string;
  method: SurveyRequestMethods;
  status: SurveyStatuses;
  survey: Survey;
  recipient: Customer;
}

