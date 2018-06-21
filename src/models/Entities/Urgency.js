//@flow
import EntityBase from './entityBase';

export class Urgency extends EntityBase {
  name: string;
  position: string;
  pendingDeletion: string;

  static fromApiEntity(apiUrgency:UrgencyType): Urgency {
    let urgency = new Urgency();
    urgency.id = apiUrgency.id;
    urgency.name = apiUrgency.name;
    urgency.position = apiUrgency.position;
    urgency.pendingDeletion = apiUrgency.pendingDeletion;

    return urgency;
  }
}

export default Urgency;

export type UrgencyType = {
  id: number,
  name: string;
  position: string;
  pendingDeletion: string;
}

