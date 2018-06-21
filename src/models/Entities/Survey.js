//@flow
import EntityBase from './entityBase';

export class Survey extends EntityBase {
  title: string;
  expirationMessage: string;
  active: string;
  availableToSupportReps: string;
  expirationDate: string;
  displayIncidentNumber: string;
  displayIncidentDateCreated: string;
  displayIncidentDateClosed: string;
  displayIncidentDescription: string;
  displayIncidentResolution: string;
  displayIncidentCustomerUrl: string;
  displayIncidentRepUrl: string;
  displayIncidentFieldsAboveSurvey: string;
  availableToMySupport: string;
  showTitle: string;

  static fromApiEntity(apiSurvey:SurveyType): Survey {
    let survey = new Survey();
    survey.id = apiSurvey.id;
    survey.title = apiSurvey.title;
    survey.expirationMessage = apiSurvey.expirationMessage;
    survey.active = apiSurvey.active;
    survey.availableToSupportReps = apiSurvey.availableToSupportReps;
    survey.expirationDate = apiSurvey.expirationDate;
    survey.displayIncidentNumber = apiSurvey.displayIncidentNumber;
    survey.displayIncidentDateCreated = apiSurvey.displayIncidentDateCreated;
    survey.displayIncidentDateClosed = apiSurvey.displayIncidentDateClosed;
    survey.displayIncidentDescription = apiSurvey.displayIncidentDescription;
    survey.displayIncidentResolution = apiSurvey.displayIncidentResolution;
    survey.displayIncidentCustomerUrl = apiSurvey.displayIncidentCustomerUrl;
    survey.displayIncidentRepUrl = apiSurvey.displayIncidentRepUrl;
    survey.displayIncidentFieldsAboveSurvey = apiSurvey.displayIncidentFieldsAboveSurvey;
    survey.availableToMySupport = apiSurvey.availableToMySupport;
    survey.showTitle = apiSurvey.showTitle;

    return survey;
  }
}

export default Survey;

export type SurveyType = {
  id: number,
  title: string;
  expirationMessage: string;
  active: string;
  availableToSupportReps: string;
  expirationDate: string;
  displayIncidentNumber: string;
  displayIncidentDateCreated: string;
  displayIncidentDateClosed: string;
  displayIncidentDescription: string;
  displayIncidentResolution: string;
  displayIncidentCustomerUrl: string;
  displayIncidentRepUrl: string;
  displayIncidentFieldsAboveSurvey: string;
  availableToMySupport: string;
  showTitle: string;
}

