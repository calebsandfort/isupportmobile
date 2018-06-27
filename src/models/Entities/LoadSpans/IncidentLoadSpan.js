//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import LoadSpanBase from './LoadSpanBase';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import CompanyLoadSpan from './CompanyLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import IncidentTemplateLoadSpan from './IncidentTemplateLoadSpan';
import IncidentStatusLoadSpan from './IncidentStatusLoadSpan';
import ServiceLevelAgreementMatrixLoadSpan from './ServiceLevelAgreementMatrixLoadSpan';
import AcknowledgmentLoadSpan from './AcknowledgmentLoadSpan';
import ApprovalCycleLoadSpan from './ApprovalCycleLoadSpan';
import ImpactLoadSpan from './ImpactLoadSpan';
import UrgencyLoadSpan from './UrgencyLoadSpan';
import ServiceContractLoadSpan from './ServiceContractLoadSpan';
import RuleGroupLoadSpan from './RuleGroupLoadSpan';
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';

export class IncidentLoadSpan extends LoadSpanBase {
  guid: boolean;
  routeCount: boolean;
  closedDate: boolean;
  createdDate: boolean;
  followupDate: boolean;
  lastEscalationDate: boolean;
  modifiedDate: boolean;
  number: boolean;
  issueDescription: boolean;
  issueResolution: boolean;
  generatedDate: boolean;
  currentApprovalWorkflowGuid: boolean;
  shortDescription: boolean;
  customNumber: boolean;
  isCourtesyTicket: boolean;
  modifiedByCustomer: boolean;
  modifiedByAssignedCustomer: boolean;
  feedbackQuestion: boolean;
  feedbackResponse: boolean;
  userBrowser: boolean;
  userDevice: boolean;
  mySupportSubmissionIpAddress: boolean;
  priority: boolean;
  source: boolean;
  assignee: SupportRepresentativeLoadSpan;
  previousAssignee: SupportRepresentativeLoadSpan;
  author: SupportRepresentativeLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;
  closedBy: SupportRepresentativeLoadSpan;
  customer: CustomerLoadSpan;
  customerAuthor: CustomerLoadSpan;
  company: CompanyLoadSpan;
  category: CategoryLoadSpan;
  group: GroupLoadSpan;
  template: IncidentTemplateLoadSpan;
  status: IncidentStatusLoadSpan;
  currentSlaMatrix: ServiceLevelAgreementMatrixLoadSpan;
  currentAcknowledgment: AcknowledgmentLoadSpan;
  currentApprovalCycle: ApprovalCycleLoadSpan;
  impact: ImpactLoadSpan;
  urgency: UrgencyLoadSpan;
  serviceContract: ServiceContractLoadSpan;
  staticEffectiveRuleGroup: RuleGroupLoadSpan;
  socialClient: EndUserDesktopDefinitionLoadSpan;

  constructor(){
    super();
    super();
    this.guid = false;
    this.routeCount = false;
    this.closedDate = false;
    this.createdDate = false;
    this.followupDate = false;
    this.lastEscalationDate = false;
    this.modifiedDate = false;
    this.number = false;
    this.issueDescription = false;
    this.issueResolution = false;
    this.generatedDate = false;
    this.currentApprovalWorkflowGuid = false;
    this.shortDescription = false;
    this.customNumber = false;
    this.isCourtesyTicket = false;
    this.modifiedByCustomer = false;
    this.modifiedByAssignedCustomer = false;
    this.feedbackQuestion = false;
    this.feedbackResponse = false;
    this.userBrowser = false;
    this.userDevice = false;
    this.mySupportSubmissionIpAddress = false;
    this.priority = false;
    this.source = false;
  }

  get assigneeLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.assignee){
		this.assignee = new SupportRepresentativeLoadSpan();
	}

    return this.assignee;
  }

  get previousAssigneeLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.previousAssignee){
		this.previousAssignee = new SupportRepresentativeLoadSpan();
	}

    return this.previousAssignee;
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

  get closedByLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.closedBy){
		this.closedBy = new SupportRepresentativeLoadSpan();
	}

    return this.closedBy;
  }

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get customerAuthorLoadSpan(): CustomerLoadSpan {
    if(!this.customerAuthor){
		this.customerAuthor = new CustomerLoadSpan();
	}

    return this.customerAuthor;
  }

  get companyLoadSpan(): CompanyLoadSpan {
    if(!this.company){
		this.company = new CompanyLoadSpan();
	}

    return this.company;
  }

  get categoryLoadSpan(): CategoryLoadSpan {
    if(!this.category){
		this.category = new CategoryLoadSpan();
	}

    return this.category;
  }

  get groupLoadSpan(): GroupLoadSpan {
    if(!this.group){
		this.group = new GroupLoadSpan();
	}

    return this.group;
  }

  get templateLoadSpan(): IncidentTemplateLoadSpan {
    if(!this.template){
		this.template = new IncidentTemplateLoadSpan();
	}

    return this.template;
  }

  get statusLoadSpan(): IncidentStatusLoadSpan {
    if(!this.status){
		this.status = new IncidentStatusLoadSpan();
	}

    return this.status;
  }

  get currentSlaMatrixLoadSpan(): ServiceLevelAgreementMatrixLoadSpan {
    if(!this.currentSlaMatrix){
		this.currentSlaMatrix = new ServiceLevelAgreementMatrixLoadSpan();
	}

    return this.currentSlaMatrix;
  }

  get currentAcknowledgmentLoadSpan(): AcknowledgmentLoadSpan {
    if(!this.currentAcknowledgment){
		this.currentAcknowledgment = new AcknowledgmentLoadSpan();
	}

    return this.currentAcknowledgment;
  }

  get currentApprovalCycleLoadSpan(): ApprovalCycleLoadSpan {
    if(!this.currentApprovalCycle){
		this.currentApprovalCycle = new ApprovalCycleLoadSpan();
	}

    return this.currentApprovalCycle;
  }

  get impactLoadSpan(): ImpactLoadSpan {
    if(!this.impact){
		this.impact = new ImpactLoadSpan();
	}

    return this.impact;
  }

  get urgencyLoadSpan(): UrgencyLoadSpan {
    if(!this.urgency){
		this.urgency = new UrgencyLoadSpan();
	}

    return this.urgency;
  }

  get serviceContractLoadSpan(): ServiceContractLoadSpan {
    if(!this.serviceContract){
		this.serviceContract = new ServiceContractLoadSpan();
	}

    return this.serviceContract;
  }

  get staticEffectiveRuleGroupLoadSpan(): RuleGroupLoadSpan {
    if(!this.staticEffectiveRuleGroup){
		this.staticEffectiveRuleGroup = new RuleGroupLoadSpan();
	}

    return this.staticEffectiveRuleGroup;
  }

  get socialClientLoadSpan(): EndUserDesktopDefinitionLoadSpan {
    if(!this.socialClient){
		this.socialClient = new EndUserDesktopDefinitionLoadSpan();
	}

    return this.socialClient;
  }

  loadAllProperties() {
    this.guid = true;
    this.routeCount = true;
    this.closedDate = true;
    this.createdDate = true;
    this.followupDate = true;
    this.lastEscalationDate = true;
    this.modifiedDate = true;
    this.number = true;
    this.issueDescription = true;
    this.issueResolution = true;
    this.generatedDate = true;
    this.currentApprovalWorkflowGuid = true;
    this.shortDescription = true;
    this.customNumber = true;
    this.isCourtesyTicket = true;
    this.modifiedByCustomer = true;
    this.modifiedByAssignedCustomer = true;
    this.feedbackQuestion = true;
    this.feedbackResponse = true;
    this.userBrowser = true;
    this.userDevice = true;
    this.mySupportSubmissionIpAddress = true;
    this.priority = true;
    this.source = true;
  }
}

export default IncidentLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
