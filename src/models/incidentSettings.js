import {IncidentStatusType} from './Entities';
import {IncidentType} from './Entities';

export type IncidentSettingsState = {
  statusesLoaded: boolean,
  statuses: Array<IncidentStatusType>,
  newIncident: IncidentType
}

export class InitNewIncidentRequest {
  access_token: string;
  rep: any;
}
