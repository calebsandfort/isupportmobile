//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomerLoadSpan from './CustomerLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import CostCenterLoadSpan from './CostCenterLoadSpan';
import JobFunctionLoadSpan from './JobFunctionLoadSpan';
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CompanyStatusLoadSpan from './CompanyStatusLoadSpan';

export class CompanyLoadSpan {
  name: boolean;
  number: boolean;
  phone: boolean;
  location: boolean;
  industry: boolean;
  region: boolean;
  streetAddress1: boolean;
  streetAddress2: boolean;
  streetAddress3: boolean;
  streetAddressCity: boolean;
  streetAddressState: boolean;
  streetAddressPostalCode: boolean;
  streetAddressCountry: boolean;
  excludeFromSearch: boolean;
  primaryContact: CustomerLoadSpan;
  primaryGroup: GroupLoadSpan;
  costCenter: CostCenterLoadSpan;
  jobFunction: JobFunctionLoadSpan;
  defaultSocialClient: EndUserDesktopDefinitionLoadSpan;
  salesRepOwner: SupportRepresentativeLoadSpan;
  status: CompanyStatusLoadSpan;

  constructor(){
    this.name = false;
    this.number = false;
    this.phone = false;
    this.location = false;
    this.industry = false;
    this.region = false;
    this.streetAddress1 = false;
    this.streetAddress2 = false;
    this.streetAddress3 = false;
    this.streetAddressCity = false;
    this.streetAddressState = false;
    this.streetAddressPostalCode = false;
    this.streetAddressCountry = false;
    this.excludeFromSearch = false;
  }

  get primaryContactLoadSpan(): CustomerLoadSpan {
    if(!this.primaryContact){
		this.primaryContact = new CustomerLoadSpan();
	}

    return this.primaryContact;
  }

  get primaryGroupLoadSpan(): GroupLoadSpan {
    if(!this.primaryGroup){
		this.primaryGroup = new GroupLoadSpan();
	}

    return this.primaryGroup;
  }

  get costCenterLoadSpan(): CostCenterLoadSpan {
    if(!this.costCenter){
		this.costCenter = new CostCenterLoadSpan();
	}

    return this.costCenter;
  }

  get jobFunctionLoadSpan(): JobFunctionLoadSpan {
    if(!this.jobFunction){
		this.jobFunction = new JobFunctionLoadSpan();
	}

    return this.jobFunction;
  }

  get defaultSocialClientLoadSpan(): EndUserDesktopDefinitionLoadSpan {
    if(!this.defaultSocialClient){
		this.defaultSocialClient = new EndUserDesktopDefinitionLoadSpan();
	}

    return this.defaultSocialClient;
  }

  get salesRepOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.salesRepOwner){
		this.salesRepOwner = new SupportRepresentativeLoadSpan();
	}

    return this.salesRepOwner;
  }

  get statusLoadSpan(): CompanyStatusLoadSpan {
    if(!this.status){
		this.status = new CompanyStatusLoadSpan();
	}

    return this.status;
  }

  loadAllProperties() {
    this.name = true;
    this.number = true;
    this.phone = true;
    this.location = true;
    this.industry = true;
    this.region = true;
    this.streetAddress1 = true;
    this.streetAddress2 = true;
    this.streetAddress3 = true;
    this.streetAddressCity = true;
    this.streetAddressState = true;
    this.streetAddressPostalCode = true;
    this.streetAddressCountry = true;
    this.excludeFromSearch = true;
  }
}

export default CompanyLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
