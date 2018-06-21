//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import Group from './Group';
import CostCenter from './CostCenter';
import JobFunction from './JobFunction';
import EndUserDesktopDefinition from './EndUserDesktopDefinition';
import SupportRepresentative from './SupportRepresentative';
import CompanyStatus from './CompanyStatus';

export class Company extends EntityBase {
  name: string;
  number: string;
  phone: string;
  location: string;
  industry: string;
  region: string;
  streetAddress1: string;
  streetAddress2: string;
  streetAddress3: string;
  streetAddressCity: string;
  streetAddressState: string;
  streetAddressPostalCode: string;
  streetAddressCountry: string;
  excludeFromSearch: string;
  primaryContact: Customer;
  primaryGroup: Group;
  costCenter: CostCenter;
  jobFunction: JobFunction;
  defaultSocialClient: EndUserDesktopDefinition;
  salesRepOwner: SupportRepresentative;
  status: CompanyStatus;

  static fromApiEntity(apiCompany:CompanyType): Company {
    let company = new Company();
    company.id = apiCompany.id;
    company.name = apiCompany.name;
    company.number = apiCompany.number;
    company.phone = apiCompany.phone;
    company.location = apiCompany.location;
    company.industry = apiCompany.industry;
    company.region = apiCompany.region;
    company.streetAddress1 = apiCompany.streetAddress1;
    company.streetAddress2 = apiCompany.streetAddress2;
    company.streetAddress3 = apiCompany.streetAddress3;
    company.streetAddressCity = apiCompany.streetAddressCity;
    company.streetAddressState = apiCompany.streetAddressState;
    company.streetAddressPostalCode = apiCompany.streetAddressPostalCode;
    company.streetAddressCountry = apiCompany.streetAddressCountry;
    company.excludeFromSearch = apiCompany.excludeFromSearch;
    if (apiCompany.primaryContact) company.primaryContact = Customer.fromApiEntity(apiCompany.primaryContact);
    if (apiCompany.primaryGroup) company.primaryGroup = Group.fromApiEntity(apiCompany.primaryGroup);
    if (apiCompany.costCenter) company.costCenter = CostCenter.fromApiEntity(apiCompany.costCenter);
    if (apiCompany.jobFunction) company.jobFunction = JobFunction.fromApiEntity(apiCompany.jobFunction);
    if (apiCompany.defaultSocialClient) company.defaultSocialClient = EndUserDesktopDefinition.fromApiEntity(apiCompany.defaultSocialClient);
    if (apiCompany.salesRepOwner) company.salesRepOwner = SupportRepresentative.fromApiEntity(apiCompany.salesRepOwner);
    if (apiCompany.status) company.status = CompanyStatus.fromApiEntity(apiCompany.status);

    return company;
  }
}

export default Company;

export type CompanyType = {
  id: number,
  name: string;
  number: string;
  phone: string;
  location: string;
  industry: string;
  region: string;
  streetAddress1: string;
  streetAddress2: string;
  streetAddress3: string;
  streetAddressCity: string;
  streetAddressState: string;
  streetAddressPostalCode: string;
  streetAddressCountry: string;
  excludeFromSearch: string;
  primaryContact: Customer;
  primaryGroup: Group;
  costCenter: CostCenter;
  jobFunction: JobFunction;
  defaultSocialClient: EndUserDesktopDefinition;
  salesRepOwner: SupportRepresentative;
  status: CompanyStatus;
}

