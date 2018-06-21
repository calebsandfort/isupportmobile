//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import CompanyPropertyNames from './CompanyPropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import IncidentTemplatePropertyNames from './IncidentTemplatePropertyNames';
import IncidentStatusPropertyNames from './IncidentStatusPropertyNames';
import ServiceLevelAgreementMatrixPropertyNames from './ServiceLevelAgreementMatrixPropertyNames';
import AcknowledgmentPropertyNames from './AcknowledgmentPropertyNames';
import ApprovalCyclePropertyNames from './ApprovalCyclePropertyNames';
import ImpactPropertyNames from './ImpactPropertyNames';
import UrgencyPropertyNames from './UrgencyPropertyNames';
import ServiceContractPropertyNames from './ServiceContractPropertyNames';
import RuleGroupPropertyNames from './RuleGroupPropertyNames';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';

class IncidentPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get guid (): string {
    return super.resolvePropertyName("Guid");
  }
  get routeCount (): string {
    return super.resolvePropertyName("RouteCount");
  }
  get closedDate (): string {
    return super.resolvePropertyName("ClosedDate");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get followupDate (): string {
    return super.resolvePropertyName("FollowupDate");
  }
  get lastEscalationDate (): string {
    return super.resolvePropertyName("LastEscalationDate");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get issueDescription (): string {
    return super.resolvePropertyName("IssueDescription");
  }
  get issueResolution (): string {
    return super.resolvePropertyName("IssueResolution");
  }
  get generatedDate (): string {
    return super.resolvePropertyName("GeneratedDate");
  }
  get currentApprovalWorkflowGuid (): string {
    return super.resolvePropertyName("CurrentApprovalWorkflowGuid");
  }
  get shortDescription (): string {
    return super.resolvePropertyName("ShortDescription");
  }
  get customNumber (): string {
    return super.resolvePropertyName("CustomNumber");
  }
  get isCourtesyTicket (): string {
    return super.resolvePropertyName("IsCourtesyTicket");
  }
  get modifiedByCustomer (): string {
    return super.resolvePropertyName("ModifiedByCustomer");
  }
  get modifiedByAssignedCustomer (): string {
    return super.resolvePropertyName("ModifiedByAssignedCustomer");
  }
  get feedbackQuestion (): string {
    return super.resolvePropertyName("FeedbackQuestion");
  }
  get feedbackResponse (): string {
    return super.resolvePropertyName("FeedbackResponse");
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
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get source (): string {
    return super.resolvePropertyName("Source");
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
  get customerAuthor (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerAuthor"));
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
  get template (): IncidentTemplatePropertyNames {
    return new IncidentTemplatePropertyNames(super.resolvePropertyName("Template"));
  }
  get status (): IncidentStatusPropertyNames {
    return new IncidentStatusPropertyNames(super.resolvePropertyName("Status"));
  }
  get currentSlaMatrix (): ServiceLevelAgreementMatrixPropertyNames {
    return new ServiceLevelAgreementMatrixPropertyNames(super.resolvePropertyName("CurrentSlaMatrix"));
  }
  get currentAcknowledgment (): AcknowledgmentPropertyNames {
    return new AcknowledgmentPropertyNames(super.resolvePropertyName("CurrentAcknowledgment"));
  }
  get currentApprovalCycle (): ApprovalCyclePropertyNames {
    return new ApprovalCyclePropertyNames(super.resolvePropertyName("CurrentApprovalCycle"));
  }
  get impact (): ImpactPropertyNames {
    return new ImpactPropertyNames(super.resolvePropertyName("Impact"));
  }
  get urgency (): UrgencyPropertyNames {
    return new UrgencyPropertyNames(super.resolvePropertyName("Urgency"));
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

export default IncidentPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
