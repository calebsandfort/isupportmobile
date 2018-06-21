//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import CostCenterPropertyNames from './CostCenterPropertyNames';
import JobFunctionPropertyNames from './JobFunctionPropertyNames';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import CompanyStatusPropertyNames from './CompanyStatusPropertyNames';

class CompanyPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get name (): string {
    return super.resolvePropertyName("Name");
  }
  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get phone (): string {
    return super.resolvePropertyName("Phone");
  }
  get location (): string {
    return super.resolvePropertyName("Location");
  }
  get industry (): string {
    return super.resolvePropertyName("Industry");
  }
  get region (): string {
    return super.resolvePropertyName("Region");
  }
  get streetAddress1 (): string {
    return super.resolvePropertyName("StreetAddress1");
  }
  get streetAddress2 (): string {
    return super.resolvePropertyName("StreetAddress2");
  }
  get streetAddress3 (): string {
    return super.resolvePropertyName("StreetAddress3");
  }
  get streetAddressCity (): string {
    return super.resolvePropertyName("StreetAddressCity");
  }
  get streetAddressState (): string {
    return super.resolvePropertyName("StreetAddressState");
  }
  get streetAddressPostalCode (): string {
    return super.resolvePropertyName("StreetAddressPostalCode");
  }
  get streetAddressCountry (): string {
    return super.resolvePropertyName("StreetAddressCountry");
  }
  get excludeFromSearch (): string {
    return super.resolvePropertyName("ExcludeFromSearch");
  }
  get primaryContact (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("PrimaryContact"));
  }
  get primaryGroup (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("PrimaryGroup"));
  }
  get costCenter (): CostCenterPropertyNames {
    return new CostCenterPropertyNames(super.resolvePropertyName("CostCenter"));
  }
  get jobFunction (): JobFunctionPropertyNames {
    return new JobFunctionPropertyNames(super.resolvePropertyName("JobFunction"));
  }
  get defaultSocialClient (): EndUserDesktopDefinitionPropertyNames {
    return new EndUserDesktopDefinitionPropertyNames(super.resolvePropertyName("DefaultSocialClient"));
  }
  get salesRepOwner (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("SalesRepOwner"));
  }
  get status (): CompanyStatusPropertyNames {
    return new CompanyStatusPropertyNames(super.resolvePropertyName("Status"));
  }
}

export default CompanyPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
