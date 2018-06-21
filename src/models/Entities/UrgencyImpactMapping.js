//@flow
import EntityBase from './entityBase';
import Urgency from './Urgency';
import Impact from './Impact';
import {IncidentPriority} from './Enums';

export class UrgencyImpactMapping extends EntityBase {
  pendingDeletion: string;
  priority: IncidentPriority;
  urgency: Urgency;
  impact: Impact;

  static fromApiEntity(apiUrgencyImpactMapping:UrgencyImpactMappingType): UrgencyImpactMapping {
    let urgencyImpactMapping = new UrgencyImpactMapping();
    urgencyImpactMapping.id = apiUrgencyImpactMapping.id;
    urgencyImpactMapping.pendingDeletion = apiUrgencyImpactMapping.pendingDeletion;
    urgencyImpactMapping.priority = IncidentPriority.enumOrdinalOf(parseInt(apiUrgencyImpactMapping.priority, 10));
    if (apiUrgencyImpactMapping.urgency) urgencyImpactMapping.urgency = Urgency.fromApiEntity(apiUrgencyImpactMapping.urgency);
    if (apiUrgencyImpactMapping.impact) urgencyImpactMapping.impact = Impact.fromApiEntity(apiUrgencyImpactMapping.impact);

    return urgencyImpactMapping;
  }
}

export default UrgencyImpactMapping;

export type UrgencyImpactMappingType = {
  id: number,
  pendingDeletion: string;
  priority: IncidentPriority;
  urgency: Urgency;
  impact: Impact;
}

