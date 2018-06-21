//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import CustomerPropertyNames from './CustomerPropertyNames';
import CompanyPropertyNames from './CompanyPropertyNames';
import SupportRepresentativePropertyNames from './SupportRepresentativePropertyNames';
import GroupPropertyNames from './GroupPropertyNames';
import OpportunityStagePropertyNames from './OpportunityStagePropertyNames';
import OpportunityTypePropertyNames from './OpportunityTypePropertyNames';
import OpportunityTermPropertyNames from './OpportunityTermPropertyNames';

class OpportunityPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get number (): string {
    return super.resolvePropertyName("Number");
  }
  get guid (): string {
    return super.resolvePropertyName("Guid");
  }
  get createdDate (): string {
    return super.resolvePropertyName("CreatedDate");
  }
  get modifiedDate (): string {
    return super.resolvePropertyName("ModifiedDate");
  }
  get estimatedCloseDate (): string {
    return super.resolvePropertyName("EstimatedCloseDate");
  }
  get topic (): string {
    return super.resolvePropertyName("Topic");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get commentsForQuote (): string {
    return super.resolvePropertyName("CommentsForQuote");
  }
  get winLossReason (): string {
    return super.resolvePropertyName("WinLossReason");
  }
  get probability (): string {
    return super.resolvePropertyName("Probability");
  }
  get campaignMatchType (): string {
    return super.resolvePropertyName("CampaignMatchType");
  }
  get campaignVariant (): string {
    return super.resolvePropertyName("CampaignVariant");
  }
  get campaignKeyword (): string {
    return super.resolvePropertyName("CampaignKeyword");
  }
  get modifiedByCustomer (): string {
    return super.resolvePropertyName("ModifiedByCustomer");
  }
  get modifiedByAssignedCustomer (): string {
    return super.resolvePropertyName("ModifiedByAssignedCustomer");
  }
  get purchaseOrder (): string {
    return super.resolvePropertyName("PurchaseOrder");
  }
  get customer (): CustomerPropertyNames {
    return new CustomerPropertyNames(super.resolvePropertyName("Customer"));
  }
  get company (): CompanyPropertyNames {
    return new CompanyPropertyNames(super.resolvePropertyName("Company"));
  }
  get assignee (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("Assignee"));
  }
  get group (): GroupPropertyNames {
    return new GroupPropertyNames(super.resolvePropertyName("Group"));
  }
  get stage (): OpportunityStagePropertyNames {
    return new OpportunityStagePropertyNames(super.resolvePropertyName("Stage"));
  }
  get opportunityType (): OpportunityTypePropertyNames {
    return new OpportunityTypePropertyNames(super.resolvePropertyName("OpportunityType"));
  }
  get terms (): OpportunityTermPropertyNames {
    return new OpportunityTermPropertyNames(super.resolvePropertyName("Terms"));
  }
  get modifiedBy (): SupportRepresentativePropertyNames {
    return new SupportRepresentativePropertyNames(super.resolvePropertyName("ModifiedBy"));
  }
}

export default OpportunityPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
