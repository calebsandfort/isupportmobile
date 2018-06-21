//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import ProblemStatusPropertyNames from './ProblemStatusPropertyNames';
import IncidentPropertyNames from './IncidentPropertyNames';
import PurchasePropertyNames from './PurchasePropertyNames';
import ImpactPropertyNames from './ImpactPropertyNames';
import UrgencyPropertyNames from './UrgencyPropertyNames';
import RuleGroupPropertyNames from './RuleGroupPropertyNames';

class ProblemPropertyNames extends PropertyNamesBase {
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
  get shortDescription (): string {
    return super.resolvePropertyName("ShortDescription");
  }
  get longDescription (): string {
    return super.resolvePropertyName("LongDescription");
  }
  get rootCause (): string {
    return super.resolvePropertyName("RootCause");
  }
  get workAround (): string {
    return super.resolvePropertyName("WorkAround");
  }
  get resolution (): string {
    return super.resolvePropertyName("Resolution");
  }
  get routeCount (): string {
    return super.resolvePropertyName("RouteCount");
  }
  get customNumber (): string {
    return super.resolvePropertyName("CustomNumber");
  }
  get userBrowser (): string {
    return super.resolvePropertyName("UserBrowser");
  }
  get userDevice (): string {
    return super.resolvePropertyName("UserDevice");
  }
  get priority (): string {
    return super.resolvePropertyName("Priority");
  }
  get publishedStatus (): string {
    return super.resolvePropertyName("PublishedStatus");
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
  get category (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Category"));
  }
  get group (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("Group"));
  }
  get status (): ProblemStatusPropertyNames {
    return new ProblemStatusPropertyNames(super.resolvePropertyName("Status"));
  }
  get sourceIncident (): IncidentPropertyNames {
    return new IncidentPropertyNames(super.resolvePropertyName("SourceIncident"));
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
  get staticEffectiveRuleGroup (): RuleGroupPropertyNames {
    return new RuleGroupPropertyNames(super.resolvePropertyName("StaticEffectiveRuleGroup"));
  }
}

export default ProblemPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
