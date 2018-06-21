//@flow
import EntityBase from './entityBase';

export class CompanyStatus extends EntityBase {
  label: string;

  static fromApiEntity(apiCompanyStatus:CompanyStatusType): CompanyStatus {
    let companyStatus = new CompanyStatus();
    companyStatus.id = apiCompanyStatus.id;
    companyStatus.label = apiCompanyStatus.label;

    return companyStatus;
  }
}

export default CompanyStatus;

export type CompanyStatusType = {
  id: number,
  label: string;
}

