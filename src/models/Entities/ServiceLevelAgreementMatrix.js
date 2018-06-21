//@flow
import EntityBase from './entityBase';

export class ServiceLevelAgreementMatrix extends EntityBase {

  static fromApiEntity(apiServiceLevelAgreementMatrix:ServiceLevelAgreementMatrixType): ServiceLevelAgreementMatrix {
    let serviceLevelAgreementMatrix = new ServiceLevelAgreementMatrix();
    serviceLevelAgreementMatrix.id = apiServiceLevelAgreementMatrix.id;

    return serviceLevelAgreementMatrix;
  }
}

export default ServiceLevelAgreementMatrix;

export type ServiceLevelAgreementMatrixType = {
  id: number,
}

