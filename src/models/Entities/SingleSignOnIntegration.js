//@flow
import EntityBase from './entityBase';
import {EntityTypes} from './Enums';

export class SingleSignOnIntegration extends EntityBase {
  name: string;
  active: string;
  loginButtonText: string;
  issuer: string;
  singleSignOnUrl: string;
  x509Certificate: string;
  targetType: EntityTypes;

  static fromApiEntity(apiSingleSignOnIntegration:SingleSignOnIntegrationType): SingleSignOnIntegration {
    let singleSignOnIntegration = new SingleSignOnIntegration();
    singleSignOnIntegration.id = apiSingleSignOnIntegration.id;
    singleSignOnIntegration.name = apiSingleSignOnIntegration.name;
    singleSignOnIntegration.active = apiSingleSignOnIntegration.active;
    singleSignOnIntegration.loginButtonText = apiSingleSignOnIntegration.loginButtonText;
    singleSignOnIntegration.issuer = apiSingleSignOnIntegration.issuer;
    singleSignOnIntegration.singleSignOnUrl = apiSingleSignOnIntegration.singleSignOnUrl;
    singleSignOnIntegration.x509Certificate = apiSingleSignOnIntegration.x509Certificate;
    singleSignOnIntegration.targetType = EntityTypes.enumOrdinalOf(parseInt(apiSingleSignOnIntegration.targetType, 10));

    return singleSignOnIntegration;
  }
}

export default SingleSignOnIntegration;

export type SingleSignOnIntegrationType = {
  id: number,
  name: string;
  active: string;
  loginButtonText: string;
  issuer: string;
  singleSignOnUrl: string;
  x509Certificate: string;
  targetType: EntityTypes;
}

