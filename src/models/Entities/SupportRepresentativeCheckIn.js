//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Incident from './Incident';
import Problem from './Problem';
import Change from './Change';
import KnowledgeEntry from './KnowledgeEntry';
import Asset from './Asset';

export class SupportRepresentativeCheckIn extends EntityBase {
  createdDate: string;
  latitude: string;
  longitude: string;
  owner: SupportRepresentative;
  incident: Incident;
  problem: Problem;
  change: Change;
  knowledge: KnowledgeEntry;
  asset: Asset;

  static fromApiEntity(apiSupportRepresentativeCheckIn:SupportRepresentativeCheckInType): SupportRepresentativeCheckIn {
    let supportRepresentativeCheckIn = new SupportRepresentativeCheckIn();
    supportRepresentativeCheckIn.id = apiSupportRepresentativeCheckIn.id;
    supportRepresentativeCheckIn.createdDate = apiSupportRepresentativeCheckIn.createdDate;
    supportRepresentativeCheckIn.latitude = apiSupportRepresentativeCheckIn.latitude;
    supportRepresentativeCheckIn.longitude = apiSupportRepresentativeCheckIn.longitude;
    if (apiSupportRepresentativeCheckIn.owner) supportRepresentativeCheckIn.owner = SupportRepresentative.fromApiEntity(apiSupportRepresentativeCheckIn.owner);
    if (apiSupportRepresentativeCheckIn.incident) supportRepresentativeCheckIn.incident = Incident.fromApiEntity(apiSupportRepresentativeCheckIn.incident);
    if (apiSupportRepresentativeCheckIn.problem) supportRepresentativeCheckIn.problem = Problem.fromApiEntity(apiSupportRepresentativeCheckIn.problem);
    if (apiSupportRepresentativeCheckIn.change) supportRepresentativeCheckIn.change = Change.fromApiEntity(apiSupportRepresentativeCheckIn.change);
    if (apiSupportRepresentativeCheckIn.knowledge) supportRepresentativeCheckIn.knowledge = KnowledgeEntry.fromApiEntity(apiSupportRepresentativeCheckIn.knowledge);
    if (apiSupportRepresentativeCheckIn.asset) supportRepresentativeCheckIn.asset = Asset.fromApiEntity(apiSupportRepresentativeCheckIn.asset);

    return supportRepresentativeCheckIn;
  }
}

export default SupportRepresentativeCheckIn;

export type SupportRepresentativeCheckInType = {
  id: number,
  createdDate: string;
  latitude: string;
  longitude: string;
  owner: SupportRepresentative;
  incident: Incident;
  problem: Problem;
  change: Change;
  knowledge: KnowledgeEntry;
  asset: Asset;
}

