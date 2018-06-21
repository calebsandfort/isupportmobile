//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';

export class Acknowledgment extends EntityBase {
  acknowledgmentDate: string;
  acknowledgmentRep: SupportRepresentative;

  static fromApiEntity(apiAcknowledgment:AcknowledgmentType): Acknowledgment {
    let acknowledgment = new Acknowledgment();
    acknowledgment.id = apiAcknowledgment.id;
    acknowledgment.acknowledgmentDate = apiAcknowledgment.acknowledgmentDate;
    if (apiAcknowledgment.acknowledgmentRep) acknowledgment.acknowledgmentRep = SupportRepresentative.fromApiEntity(apiAcknowledgment.acknowledgmentRep);

    return acknowledgment;
  }
}

export default Acknowledgment;

export type AcknowledgmentType = {
  id: number,
  acknowledgmentDate: string;
  acknowledgmentRep: SupportRepresentative;
}

