//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import RuleGroupPropertyNames from './RuleGroupPropertyNames';
import CategoryPropertyNames from './CategoryPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';

class KnowledgeEntryPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get problem (): string {
    return super.resolvePropertyName("Problem");
  }
  get resolution (): string {
    return super.resolvePropertyName("Resolution");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get source (): string {
    return super.resolvePropertyName("Source");
  }
  get declineComment (): string {
    return super.resolvePropertyName("DeclineComment");
  }
  get errorMessage (): string {
    return super.resolvePropertyName("ErrorMessage");
  }
  get solutionSteps (): string {
    return super.resolvePropertyName("SolutionSteps");
  }
  get cause (): string {
    return super.resolvePropertyName("Cause");
  }
  get webLink (): string {
    return super.resolvePropertyName("WebLink");
  }
  get reviewDate (): string {
    return super.resolvePropertyName("ReviewDate");
  }
  get userBrowser (): string {
    return super.resolvePropertyName("UserBrowser");
  }
  get userDevice (): string {
    return super.resolvePropertyName("UserDevice");
  }
  get capturedCount (): string {
    return super.resolvePropertyName("CapturedCount");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get modifiedByCustomer (): string {
    return super.resolvePropertyName("ModifiedByCustomer");
  }
  get approvalStatus (): string {
    return super.resolvePropertyName("ApprovalStatus");
  }
  get staticEffectiveRuleGroup (): RuleGroupPropertyNames {
    return new RuleGroupPropertyNames(super.resolvePropertyName("StaticEffectiveRuleGroup"));
  }
  get category (): CategoryPropertyNames {
    return new CategoryPropertyNames(super.resolvePropertyName("Category"));
  }
  get author (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Author"));
  }
  get reviewer (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Reviewer"));
  }
  get modifiedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("ModifiedBy"));
  }
}

export default KnowledgeEntryPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
