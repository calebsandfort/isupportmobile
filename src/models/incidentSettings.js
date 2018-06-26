import {IncidentStatusType} from './Entities';
import {IncidentType} from './Entities';
import {IncidentLoadSpan} from './Entities/LoadSpans';

export type IncidentSettingsState = {
  statusesLoaded: boolean,
  statuses: Array<IncidentStatusType>,
  incident: IncidentType
}

export class InitNewIncidentRequest {
  access_token: string;
  rep: any;
}

export class GetExistingIncidentRequest {
  access_token: string;
  id: number;
  loadSpan: IncidentLoadSpan;
}
