//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import PurchaseStatusPropertyNames from './PurchaseStatusPropertyNames';
import CustomerPropertyNames from './CustomerPropertyNames';
import CostCenterPropertyNames from './CostCenterPropertyNames';
import JobFunctionPropertyNames from './JobFunctionPropertyNames';
import IncidentPropertyNames from './IncidentPropertyNames';
import ProblemPropertyNames from './ProblemPropertyNames';
import ChangePropertyNames from './ChangePropertyNames';
import AssetPropertyNames from './AssetPropertyNames';
import PurchaseTemplatePropertyNames from './PurchaseTemplatePropertyNames';
import CompanyPropertyNames from './CompanyPropertyNames';
import EndUserDesktopDefinitionPropertyNames from './EndUserDesktopDefinitionPropertyNames';
import RuleGroupPropertyNames from './RuleGroupPropertyNames';

class PurchasePropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
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
  get shortDescription (): string {
    return super.resolvePropertyName("ShortDescription");
  }
  get requestNumber (): string {
    return super.resolvePropertyName("RequestNumber");
  }
  get comments (): string {
    return super.resolvePropertyName("Comments");
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
  get userBrowser (): string {
    return super.resolvePropertyName("UserBrowser");
  }
  get userDevice (): string {
    return super.resolvePropertyName("UserDevice");
  }
  get mySupportSubmissionIpAddress (): string {
    return super.resolvePropertyName("MySupportSubmissionIpAddress");
  }
  get modifiedByCustomer (): string {
    return super.resolvePropertyName("ModifiedByCustomer");
  }
  get modifiedByAssignedCustomer (): string {
    return super.resolvePropertyName("ModifiedByAssignedCustomer");
  }
  get approvalState (): string {
    return super.resolvePropertyName("ApprovalState");
  }
  get author (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Author"));
  }
  get modifiedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("ModifiedBy"));
  }
  get status (): PurchaseStatusPropertyNames {
    return new PurchaseStatusPropertyNames(super.resolvePropertyName("Status"));
  }
  get customerRequestedBy (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerRequestedBy"));
  }
  get customerRecipient (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerRecipient"));
  }
  get customerBillTo (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("CustomerBillTo"));
  }
  get repRequestedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("RepRequestedBy"));
  }
  get repRecipient (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("RepRecipient"));
  }
  get repBillTo (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("RepBillTo"));
  }
  get costCenter (): CostCenterPropertyNames {
    return new CostCenterPropertyNames(super.resolvePropertyName("CostCenter"));
  }
  get jobFunction (): JobFunctionPropertyNames {
    return new JobFunctionPropertyNames(super.resolvePropertyName("JobFunction"));
  }
  get sourceIncident (): IncidentPropertyNames {
    return new IncidentPropertyNames(super.resolvePropertyName("SourceIncident"));
  }
  get sourceProblem (): ProblemPropertyNames {
    return new ProblemPropertyNames(super.resolvePropertyName("SourceProblem"));
  }
  get sourceChange (): ChangePropertyNames {
    return new ChangePropertyNames(super.resolvePropertyName("SourceChange"));
  }
  get sourceAsset (): AssetPropertyNames {
    return new AssetPropertyNames(super.resolvePropertyName("SourceAsset"));
  }
  get template (): PurchaseTemplatePropertyNames {
    return new PurchaseTemplatePropertyNames(super.resolvePropertyName("Template"));
  }
  get customerRequestedByCompany (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("CustomerRequestedByCompany"));
  }
  get customerRecipientCompany (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("CustomerRecipientCompany"));
  }
  get customerBillToCompany (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("CustomerBillToCompany"));
  }
  get socialClient (): EndUserDesktopDefinitionPropertyNames {
    return new EndUserDesktopDefinitionPropertyNames(super.resolvePropertyName("SocialClient"));
  }
  get staticEffectiveRuleGroup (): RuleGroupPropertyNames {
    return new RuleGroupPropertyNames(super.resolvePropertyName("StaticEffectiveRuleGroup"));
  }
}

export default PurchasePropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
