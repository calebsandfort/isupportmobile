//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import PurchaseStatusLoadSpan from './PurchaseStatusLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import CostCenterLoadSpan from './CostCenterLoadSpan';
import JobFunctionLoadSpan from './JobFunctionLoadSpan';
import IncidentLoadSpan from './IncidentLoadSpan';
import ProblemLoadSpan from './ProblemLoadSpan';
import ChangeLoadSpan from './ChangeLoadSpan';
import AssetLoadSpan from './AssetLoadSpan';
import PurchaseTemplateLoadSpan from './PurchaseTemplateLoadSpan';
import CompanyLoadSpan from './CompanyLoadSpan';
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';
import RuleGroupLoadSpan from './RuleGroupLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class PurchaseLoadSpan extends LoadSpanBase {
  number: boolean;
  createdDate: boolean;
  modifiedDate: boolean;
  closedDate: boolean;
  shortDescription: boolean;
  requestNumber: boolean;
  comments: boolean;
  customNumber: boolean;
  fromServiceCatalog: boolean;
  associatedCost: boolean;
  userBrowser: boolean;
  userDevice: boolean;
  mySupportSubmissionIpAddress: boolean;
  modifiedByCustomer: boolean;
  modifiedByAssignedCustomer: boolean;
  approvalState: boolean;
  author: SupportRepresentativeLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;
  status: PurchaseStatusLoadSpan;
  customerRequestedBy: CustomerLoadSpan;
  customerRecipient: CustomerLoadSpan;
  customerBillTo: CustomerLoadSpan;
  repRequestedBy: SupportRepresentativeLoadSpan;
  repRecipient: SupportRepresentativeLoadSpan;
  repBillTo: SupportRepresentativeLoadSpan;
  costCenter: CostCenterLoadSpan;
  jobFunction: JobFunctionLoadSpan;
  sourceIncident: IncidentLoadSpan;
  sourceProblem: ProblemLoadSpan;
  sourceChange: ChangeLoadSpan;
  sourceAsset: AssetLoadSpan;
  template: PurchaseTemplateLoadSpan;
  customerRequestedByCompany: CompanyLoadSpan;
  customerRecipientCompany: CompanyLoadSpan;
  customerBillToCompany: CompanyLoadSpan;
  socialClient: EndUserDesktopDefinitionLoadSpan;
  staticEffectiveRuleGroup: RuleGroupLoadSpan;

  constructor(){
    super();
    this.number = false;
    this.createdDate = false;
    this.modifiedDate = false;
    this.closedDate = false;
    this.shortDescription = false;
    this.requestNumber = false;
    this.comments = false;
    this.customNumber = false;
    this.fromServiceCatalog = false;
    this.associatedCost = false;
    this.userBrowser = false;
    this.userDevice = false;
    this.mySupportSubmissionIpAddress = false;
    this.modifiedByCustomer = false;
    this.modifiedByAssignedCustomer = false;
    this.approvalState = false;
  }

  get authorLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.author){
		this.author = new SupportRepresentativeLoadSpan();
	}

    return this.author;
  }

  get modifiedByLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.modifiedBy){
		this.modifiedBy = new SupportRepresentativeLoadSpan();
	}

    return this.modifiedBy;
  }

  get statusLoadSpan(): PurchaseStatusLoadSpan {
    if(!this.status){
		this.status = new PurchaseStatusLoadSpan();
	}

    return this.status;
  }

  get customerRequestedByLoadSpan(): CustomerLoadSpan {
    if(!this.customerRequestedBy){
		this.customerRequestedBy = new CustomerLoadSpan();
	}

    return this.customerRequestedBy;
  }

  get customerRecipientLoadSpan(): CustomerLoadSpan {
    if(!this.customerRecipient){
		this.customerRecipient = new CustomerLoadSpan();
	}

    return this.customerRecipient;
  }

  get customerBillToLoadSpan(): CustomerLoadSpan {
    if(!this.customerBillTo){
		this.customerBillTo = new CustomerLoadSpan();
	}

    return this.customerBillTo;
  }

  get repRequestedByLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.repRequestedBy){
		this.repRequestedBy = new SupportRepresentativeLoadSpan();
	}

    return this.repRequestedBy;
  }

  get repRecipientLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.repRecipient){
		this.repRecipient = new SupportRepresentativeLoadSpan();
	}

    return this.repRecipient;
  }

  get repBillToLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.repBillTo){
		this.repBillTo = new SupportRepresentativeLoadSpan();
	}

    return this.repBillTo;
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

  get sourceIncidentLoadSpan(): IncidentLoadSpan {
    if(!this.sourceIncident){
		this.sourceIncident = new IncidentLoadSpan();
	}

    return this.sourceIncident;
  }

  get sourceProblemLoadSpan(): ProblemLoadSpan {
    if(!this.sourceProblem){
		this.sourceProblem = new ProblemLoadSpan();
	}

    return this.sourceProblem;
  }

  get sourceChangeLoadSpan(): ChangeLoadSpan {
    if(!this.sourceChange){
		this.sourceChange = new ChangeLoadSpan();
	}

    return this.sourceChange;
  }

  get sourceAssetLoadSpan(): AssetLoadSpan {
    if(!this.sourceAsset){
		this.sourceAsset = new AssetLoadSpan();
	}

    return this.sourceAsset;
  }

  get templateLoadSpan(): PurchaseTemplateLoadSpan {
    if(!this.template){
		this.template = new PurchaseTemplateLoadSpan();
	}

    return this.template;
  }

  get customerRequestedByCompanyLoadSpan(): CompanyLoadSpan {
    if(!this.customerRequestedByCompany){
		this.customerRequestedByCompany = new CompanyLoadSpan();
	}

    return this.customerRequestedByCompany;
  }

  get customerRecipientCompanyLoadSpan(): CompanyLoadSpan {
    if(!this.customerRecipientCompany){
		this.customerRecipientCompany = new CompanyLoadSpan();
	}

    return this.customerRecipientCompany;
  }

  get customerBillToCompanyLoadSpan(): CompanyLoadSpan {
    if(!this.customerBillToCompany){
		this.customerBillToCompany = new CompanyLoadSpan();
	}

    return this.customerBillToCompany;
  }

  get socialClientLoadSpan(): EndUserDesktopDefinitionLoadSpan {
    if(!this.socialClient){
		this.socialClient = new EndUserDesktopDefinitionLoadSpan();
	}

    return this.socialClient;
  }

  get staticEffectiveRuleGroupLoadSpan(): RuleGroupLoadSpan {
    if(!this.staticEffectiveRuleGroup){
		this.staticEffectiveRuleGroup = new RuleGroupLoadSpan();
	}

    return this.staticEffectiveRuleGroup;
  }

  loadAllProperties() {
    this.number = true;
    this.createdDate = true;
    this.modifiedDate = true;
    this.closedDate = true;
    this.shortDescription = true;
    this.requestNumber = true;
    this.comments = true;
    this.customNumber = true;
    this.fromServiceCatalog = true;
    this.associatedCost = true;
    this.userBrowser = true;
    this.userDevice = true;
    this.mySupportSubmissionIpAddress = true;
    this.modifiedByCustomer = true;
    this.modifiedByAssignedCustomer = true;
    this.approvalState = true;
  }
}

export default PurchaseLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
