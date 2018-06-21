//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomChangeTypePropertyNames from './CustomChangeTypePropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import CompanyPropertyNames from './CompanyPropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import ChangeStatusPropertyNames from './ChangeStatusPropertyNames';
import IncidentPropertyNames from './IncidentPropertyNames';
import ProblemPropertyNames from './ProblemPropertyNames';
import PurchasePropertyNames from './PurchasePropertyNames';
import ImpactPropertyNames from './ImpactPropertyNames';
import UrgencyPropertyNames from './UrgencyPropertyNames';
import ChangeTemplatePropertyNames from './ChangeTemplatePropertyNames';
import ApprovalCyclePropertyNames from './ApprovalCyclePropertyNames';
import ServiceContractPropertyNames from './ServiceContractPropertyNames';
import RuleGroupPropertyNames from './RuleGroupPropertyNames';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';

class ChangePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get guid (): string {
    return super.resolvePropertyName("Guid");
  }
  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get closedDate (): string {
    return super.resolvePropertyName("ClosedDate");
  }
  get authorizationDate (): string {
    return super.resolvePropertyName("AuthorizationDate");
  }
  get scheduleImplementationDate (): string {
    return super.resolvePropertyName("ScheduleImplementationDate");
  }
  get actualImplementationDate (): string {
    return super.resolvePropertyName("ActualImplementationDate");
  }
  get reviewDate (): string {
    return super.resolvePropertyName("ReviewDate");
  }
  get dueDate (): string {
    return super.resolvePropertyName("DueDate");
  }
  get reason (): string {
    return super.resolvePropertyName("Reason");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get results (): string {
    return super.resolvePropertyName("Results");
  }
  get routeCount (): string {
    return super.resolvePropertyName("RouteCount");
  }
  get lastEscalationDate (): string {
    return super.resolvePropertyName("LastEscalationDate");
  }
  get missedEmergencyEscalationsCount (): string {
    return super.resolvePropertyName("MissedEmergencyEscalationsCount");
  }
  get currentApprovalWorkflowGuid (): string {
    return super.resolvePropertyName("CurrentApprovalWorkflowGuid");
  }
  get generatedDate (): string {
    return super.resolvePropertyName("GeneratedDate");
  }
  get isCourtesyTicket (): string {
    return super.resolvePropertyName("IsCourtesyTicket");
  }
  get customNumber (): string {
    return super.resolvePropertyName("CustomNumber");
  }
  get fromServiceCatalog (): string {
    return super.resolvePropertyName("FromServiceCatalog");
  }
  get associatedCost (): string {
    return super.resolvePropertyName("AssociatedCost");
  }
  get modifiedByCustomer (): string {
    return super.resolvePropertyName("ModifiedByCustomer");
  }
  get modifiedByAssignedCustomer (): string {
    return super.resolvePropertyName("ModifiedByAssignedCustomer");
  }
  get userBrowser (): string {
    return super.resolvePropertyName("UserBrowser");
  }
  get userDevice (): string {
    return super.resolvePropertyName("UserDevice");
  }
  get mySupportSubmissionIpAddress (): string {
    return super.resolvePropertyName("MySupportSubmissionIpAddress");
  }
  get feedbackQuestion (): string {
    return super.resolvePropertyName("FeedbackQuestion");
  }
  get feedbackResponse (): string {
    return super.resolvePropertyName("FeedbackResponse");
  }
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get scheduleImplementationExceededStatus (): string {
    return super.resolvePropertyName("ScheduleImplementationExceededStatus");
  }
  get reviewExceededStatus (): string {
    return super.resolvePropertyName("ReviewExceededStatus");
  }
  get dueExceededStatus (): string {
    return super.resolvePropertyName("DueExceededStatus");
  }
  get source (): string {
    return super.resolvePropertyName("Source");
  }
  get changeType (): CustomChangeTypePropertyNames {
    return new CustomChangeTypePropertyNames(super.resolvePropertyName("ChangeType"));
  }
  get assignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Assignee"));
  }
  get previousAssignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("PreviousAssignee"));
  }
  get author (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Author"));
  }
  get modifiedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("ModifiedBy"));
  }
  get closedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("ClosedBy"));
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get company (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("Company"));
  }
  get category (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Category"));
  }
  get group (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("Group"));
  }
  get status (): ChangeStatusPropertyNames {
    return new ChangeStatusPropertyNames(super.resolvePropertyName("Status"));
  }
  get sourceIncident (): IncidentPropertyNames {
    return new IncidentPropertyNames(super.resolvePropertyName("SourceIncident"));
  }
  get sourceProblem (): ProblemPropertyNames {
    return new ProblemPropertyNames(super.resolvePropertyName("SourceProblem"));
  }
  get sourcePurchase (): PurchasePropertyNames {
    return new PurchasePropertyNames(super.resolvePropertyName("SourcePurchase"));
  }
  get impact (): ImpactPropertyNames {
    return new ImpactPropertyNames(super.resolvePropertyName("Impact"));
  }
  get urgency (): UrgencyPropertyNames {
    return new UrgencyPropertyNames(super.resolvePropertyName("Urgency"));
  }
  get template (): ChangeTemplatePropertyNames {
    return new ChangeTemplatePropertyNames(super.resolvePropertyName("Template"));
  }
  get currentApprovalCycle (): ApprovalCyclePropertyNames {
    return new ApprovalCyclePropertyNames(super.resolvePropertyName("CurrentApprovalCycle"));
  }
  get serviceContract (): ServiceContractPropertyNames {
    return new ServiceContractPropertyNames(super.resolvePropertyName("ServiceContract"));
  }
  get staticEffectiveRuleGroup (): RuleGroupPropertyNames {
    return new RuleGroupPropertyNames(super.resolvePropertyName("StaticEffectiveRuleGroup"));
  }
  get socialClient (): EndUserDesktopDefinitionPropertyNames {
    return new EndUserDesktopDefinitionPropertyNames(super.resolvePropertyName("SocialClient"));
  }
}

export default ChangePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
