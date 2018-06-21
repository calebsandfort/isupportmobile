//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import CustomChangeTypeLoadSpan from './CustomChangeTypeLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import CompanyLoadSpan from './CompanyLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import ChangeStatusLoadSpan from './ChangeStatusLoadSpan';
import IncidentLoadSpan from './IncidentLoadSpan';
import ProblemLoadSpan from './ProblemLoadSpan';
import PurchaseLoadSpan from './PurchaseLoadSpan';
import ImpactLoadSpan from './ImpactLoadSpan';
import UrgencyLoadSpan from './UrgencyLoadSpan';
import ChangeTemplateLoadSpan from './ChangeTemplateLoadSpan';
import ApprovalCycleLoadSpan from './ApprovalCycleLoadSpan';
import ServiceContractLoadSpan from './ServiceContractLoadSpan';
import RuleGroupLoadSpan from './RuleGroupLoadSpan';
import EndUserDesktopDefinitionLoadSpan from './EndUserDesktopDefinitionLoadSpan';

export class ChangeLoadSpan {
  guid: boolean;
  number: boolean;
  createdDate: boolean;
  modifiedDate: boolean;
  closedDate: boolean;
  authorizationDate: boolean;
  scheduleImplementationDate: boolean;
  actualImplementationDate: boolean;
  reviewDate: boolean;
  dueDate: boolean;
  reason: boolean;
  description: boolean;
  results: boolean;
  routeCount: boolean;
  lastEscalationDate: boolean;
  missedEmergencyEscalationsCount: boolean;
  currentApprovalWorkflowGuid: boolean;
  generatedDate: boolean;
  isCourtesyTicket: boolean;
  customNumber: boolean;
  fromServiceCatalog: boolean;
  associatedCost: boolean;
  modifiedByCustomer: boolean;
  modifiedByAssignedCustomer: boolean;
  userBrowser: boolean;
  userDevice: boolean;
  mySupportSubmissionIpAddress: boolean;
  feedbackQuestion: boolean;
  feedbackResponse: boolean;
  priority: boolean;
  scheduleImplementationExceededStatus: boolean;
  reviewExceededStatus: boolean;
  dueExceededStatus: boolean;
  source: boolean;
  changeType: CustomChangeTypeLoadSpan;
  assignee: SupportRepresentativeLoadSpan;
  previousAssignee: SupportRepresentativeLoadSpan;
  author: SupportRepresentativeLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;
  closedBy: SupportRepresentativeLoadSpan;
  customer: CustomerLoadSpan;
  company: CompanyLoadSpan;
  category: CategoryLoadSpan;
  group: GroupLoadSpan;
  status: ChangeStatusLoadSpan;
  sourceIncident: IncidentLoadSpan;
  sourceProblem: ProblemLoadSpan;
  sourcePurchase: PurchaseLoadSpan;
  impact: ImpactLoadSpan;
  urgency: UrgencyLoadSpan;
  template: ChangeTemplateLoadSpan;
  currentApprovalCycle: ApprovalCycleLoadSpan;
  serviceContract: ServiceContractLoadSpan;
  staticEffectiveRuleGroup: RuleGroupLoadSpan;
  socialClient: EndUserDesktopDefinitionLoadSpan;

  constructor(){
    this.guid = false;
    this.number = false;
    this.createdDate = false;
    this.modifiedDate = false;
    this.closedDate = false;
    this.authorizationDate = false;
    this.scheduleImplementationDate = false;
    this.actualImplementationDate = false;
    this.reviewDate = false;
    this.dueDate = false;
    this.reason = false;
    this.description = false;
    this.results = false;
    this.routeCount = false;
    this.lastEscalationDate = false;
    this.missedEmergencyEscalationsCount = false;
    this.currentApprovalWorkflowGuid = false;
    this.generatedDate = false;
    this.isCourtesyTicket = false;
    this.customNumber = false;
    this.fromServiceCatalog = false;
    this.associatedCost = false;
    this.modifiedByCustomer = false;
    this.modifiedByAssignedCustomer = false;
    this.userBrowser = false;
    this.userDevice = false;
    this.mySupportSubmissionIpAddress = false;
    this.feedbackQuestion = false;
    this.feedbackResponse = false;
    this.priority = false;
    this.scheduleImplementationExceededStatus = false;
    this.reviewExceededStatus = false;
    this.dueExceededStatus = false;
    this.source = false;
  }

  get changeTypeLoadSpan(): CustomChangeTypeLoadSpan {
    if(!this.changeType){
		this.changeType = new CustomChangeTypeLoadSpan();
	}

    return this.changeType;
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

  get statusLoadSpan(): ChangeStatusLoadSpan {
    if(!this.status){
		this.status = new ChangeStatusLoadSpan();
	}

    return this.status;
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

  get sourcePurchaseLoadSpan(): PurchaseLoadSpan {
    if(!this.sourcePurchase){
		this.sourcePurchase = new PurchaseLoadSpan();
	}

    return this.sourcePurchase;
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

  get templateLoadSpan(): ChangeTemplateLoadSpan {
    if(!this.template){
		this.template = new ChangeTemplateLoadSpan();
	}

    return this.template;
  }

  get currentApprovalCycleLoadSpan(): ApprovalCycleLoadSpan {
    if(!this.currentApprovalCycle){
		this.currentApprovalCycle = new ApprovalCycleLoadSpan();
	}

    return this.currentApprovalCycle;
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
    this.number = true;
    this.createdDate = true;
    this.modifiedDate = true;
    this.closedDate = true;
    this.authorizationDate = true;
    this.scheduleImplementationDate = true;
    this.actualImplementationDate = true;
    this.reviewDate = true;
    this.dueDate = true;
    this.reason = true;
    this.description = true;
    this.results = true;
    this.routeCount = true;
    this.lastEscalationDate = true;
    this.missedEmergencyEscalationsCount = true;
    this.currentApprovalWorkflowGuid = true;
    this.generatedDate = true;
    this.isCourtesyTicket = true;
    this.customNumber = true;
    this.fromServiceCatalog = true;
    this.associatedCost = true;
    this.modifiedByCustomer = true;
    this.modifiedByAssignedCustomer = true;
    this.userBrowser = true;
    this.userDevice = true;
    this.mySupportSubmissionIpAddress = true;
    this.feedbackQuestion = true;
    this.feedbackResponse = true;
    this.priority = true;
    this.scheduleImplementationExceededStatus = true;
    this.reviewExceededStatus = true;
    this.dueExceededStatus = true;
    this.source = true;
  }
}

export default ChangeLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
