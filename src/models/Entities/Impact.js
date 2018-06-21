//@flow
import EntityBase from './entityBase';

export class Impact extends EntityBase {
  name: string;
  position: string;
  pendingDeletion: string;

  static fromApiEntity(apiImpact:ImpactType): Impact {
    let impact = new Impact();
    impact.id = apiImpact.id;
    impact.name = apiImpact.name;
    impact.position = apiImpact.position;
    impact.pendingDeletion = apiImpact.pendingDeletion;

    return impact;
  }
}

export default Impact;

export type ImpactType = {
  id: number,
  name: string;
  position: string;
  pendingDeletion: string;
}

