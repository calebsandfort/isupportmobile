//@flow
import {Incident} from './Entities';
import {IncidentType} from './Entities';
import {IncidentLoadSpan} from './Entities/LoadSpans';

import {IncidentStatus} from './Entities';
import {IncidentStatusType} from './Entities';
import {IncidentStatusLoadSpan} from './Entities/LoadSpans';

import {IncidentTemplate} from './Entities';
import {IncidentTemplateType} from './Entities';
import {IncidentTemplateLoadSpan} from './Entities/LoadSpans';

import {IncidentTemplateAttachment} from './Entities';
import {IncidentTemplateAttachmentType} from './Entities';
import {IncidentTemplateAttachmentLoadSpan} from './Entities/LoadSpans';

import {Asset} from './Entities';
import {AssetType} from './Entities';
import {AssetLoadSpan} from './Entities/LoadSpans';

import {InventoryAsset} from './Entities';
import {InventoryAssetType} from './Entities';
import {InventoryAssetLoadSpan} from './Entities/LoadSpans';

import {AssetTypeEntity} from './Entities';
import {AssetTypeEntityType} from './Entities';
import {AssetTypeLoadSpan} from './Entities/LoadSpans';

import {RepRefreshToken} from './Entities';
import {RepRefreshTokenType} from './Entities';
import {RepRefreshTokenLoadSpan} from './Entities/LoadSpans';

import {SupportRepresentative} from './Entities';
import {SupportRepresentativeType} from './Entities';
import {SupportRepresentativeLoadSpan} from './Entities/LoadSpans';

import {Acknowledgment} from './Entities';
import {AcknowledgmentType} from './Entities';
import {AcknowledgmentLoadSpan} from './Entities/LoadSpans';

import {Group} from './Entities';
import {GroupType} from './Entities';
import {GroupLoadSpan} from './Entities/LoadSpans';

import {Location} from './Entities';
import {LocationType} from './Entities';
import {LocationLoadSpan} from './Entities/LoadSpans';

import {ServiceLevelAgreementMatrix} from './Entities';
import {ServiceLevelAgreementMatrixType} from './Entities';
import {ServiceLevelAgreementMatrixLoadSpan} from './Entities/LoadSpans';

import {RuleGroup} from './Entities';
import {RuleGroupType} from './Entities';
import {RuleGroupLoadSpan} from './Entities/LoadSpans';

import {ApprovalCycle} from './Entities';
import {ApprovalCycleType} from './Entities';
import {ApprovalCycleLoadSpan} from './Entities/LoadSpans';

import {Category} from './Entities';
import {CategoryType} from './Entities';
import {CategoryLoadSpan} from './Entities/LoadSpans';

import {Customer} from './Entities';
import {CustomerType} from './Entities';
import {CustomerLoadSpan} from './Entities/LoadSpans';

import {Company} from './Entities';
import {CompanyType} from './Entities';
import {CompanyLoadSpan} from './Entities/LoadSpans';

import {EndUserDesktopDefinition} from './Entities';
import {EndUserDesktopDefinitionType} from './Entities';
import {EndUserDesktopDefinitionLoadSpan} from './Entities/LoadSpans';

import {SocialClientOptions} from './Entities';
import {SocialClientOptionsType} from './Entities';
import {SocialClientOptionsLoadSpan} from './Entities/LoadSpans';

import {SocialClientNavigator} from './Entities';
import {SocialClientNavigatorType} from './Entities';
import {SocialClientNavigatorLoadSpan} from './Entities/LoadSpans';

import {SocialClientTheme} from './Entities';
import {SocialClientThemeType} from './Entities';
import {SocialClientThemeLoadSpan} from './Entities/LoadSpans';

import {SocialClientThemeImage} from './Entities';
import {SocialClientThemeImageType} from './Entities';
import {SocialClientThemeImageLoadSpan} from './Entities/LoadSpans';

import {NewsFeedOptions} from './Entities';
import {NewsFeedOptionsType} from './Entities';
import {NewsFeedOptionsLoadSpan} from './Entities/LoadSpans';

import {RepNewsFeedOptions} from './Entities';
import {RepNewsFeedOptionsType} from './Entities';
import {RepNewsFeedOptionsLoadSpan} from './Entities/LoadSpans';

import {DiscussionFeedIcon} from './Entities';
import {DiscussionFeedIconType} from './Entities';
import {DiscussionFeedIconLoadSpan} from './Entities/LoadSpans';

import {KnowledgeEntry} from './Entities';
import {KnowledgeEntryType} from './Entities';
import {KnowledgeEntryLoadSpan} from './Entities/LoadSpans';

import {KnowledgeEntryLikeEntry} from './Entities';
import {KnowledgeEntryLikeEntryType} from './Entities';
import {KnowledgeEntryLikeEntryLoadSpan} from './Entities/LoadSpans';

import {KnowledgeEntryAuditHistory} from './Entities';
import {KnowledgeEntryAuditHistoryType} from './Entities';
import {KnowledgeEntryAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {AssetAuditHistory} from './Entities';
import {AssetAuditHistoryType} from './Entities';
import {AssetAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {AssetRuleGroupHistory} from './Entities';
import {AssetRuleGroupHistoryType} from './Entities';
import {AssetRuleGroupHistoryLoadSpan} from './Entities/LoadSpans';

import {IncidentAuditHistory} from './Entities';
import {IncidentAuditHistoryType} from './Entities';
import {IncidentAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {IncidentCorrespondenceHistory} from './Entities';
import {IncidentCorrespondenceHistoryType} from './Entities';
import {IncidentCorrespondenceHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeCorrespondenceHistory} from './Entities';
import {ChangeCorrespondenceHistoryType} from './Entities';
import {ChangeCorrespondenceHistoryLoadSpan} from './Entities/LoadSpans';

import {PurchaseCorrespondenceHistory} from './Entities';
import {PurchaseCorrespondenceHistoryType} from './Entities';
import {PurchaseCorrespondenceHistoryLoadSpan} from './Entities/LoadSpans';

import {RepWorkHistory} from './Entities';
import {RepWorkHistoryType} from './Entities';
import {RepWorkHistoryLoadSpan} from './Entities/LoadSpans';

import {CustomerWorkHistory} from './Entities';
import {CustomerWorkHistoryType} from './Entities';
import {CustomerWorkHistoryLoadSpan} from './Entities/LoadSpans';

import {CustomerSalesNotes} from './Entities';
import {CustomerSalesNotesType} from './Entities';
import {CustomerSalesNotesLoadSpan} from './Entities/LoadSpans';

import {IncidentSLAHistory} from './Entities';
import {IncidentSLAHistoryType} from './Entities';
import {IncidentSLAHistoryLoadSpan} from './Entities/LoadSpans';

import {IncidentApprovalHistory} from './Entities';
import {IncidentApprovalHistoryType} from './Entities';
import {IncidentApprovalHistoryLoadSpan} from './Entities/LoadSpans';

import {IncidentRuleGroupHistory} from './Entities';
import {IncidentRuleGroupHistoryType} from './Entities';
import {IncidentRuleGroupHistoryLoadSpan} from './Entities/LoadSpans';

import {ServiceCatalog} from './Entities';
import {ServiceCatalogType} from './Entities';
import {ServiceCatalogLoadSpan} from './Entities/LoadSpans';

import {ServiceCatalogEntry} from './Entities';
import {ServiceCatalogEntryType} from './Entities';
import {ServiceCatalogEntryLoadSpan} from './Entities/LoadSpans';

import {UserAvatarImage} from './Entities';
import {UserAvatarImageType} from './Entities';
import {UserAvatarImageLoadSpan} from './Entities/LoadSpans';

import {BuiltServiceCatalogEntry} from './Entities';
import {BuiltServiceCatalogEntryType} from './Entities';
import {BuiltServiceCatalogEntryLoadSpan} from './Entities/LoadSpans';

import {ProblemConfiguration} from './Entities';
import {ProblemConfigurationType} from './Entities';
import {ProblemConfigurationLoadSpan} from './Entities/LoadSpans';

import {ChangeConfiguration} from './Entities';
import {ChangeConfigurationType} from './Entities';
import {ChangeConfigurationLoadSpan} from './Entities/LoadSpans';

import {ProblemStatus} from './Entities';
import {ProblemStatusType} from './Entities';
import {ProblemStatusLoadSpan} from './Entities/LoadSpans';

import {ChangeStatus} from './Entities';
import {ChangeStatusType} from './Entities';
import {ChangeStatusLoadSpan} from './Entities/LoadSpans';

import {PurchaseStatus} from './Entities';
import {PurchaseStatusType} from './Entities';
import {PurchaseStatusLoadSpan} from './Entities/LoadSpans';

import {ServiceContractStatus} from './Entities';
import {ServiceContractStatusType} from './Entities';
import {ServiceContractStatusLoadSpan} from './Entities/LoadSpans';

import {CustomChangeType} from './Entities';
import {CustomChangeTypeType} from './Entities';
import {CustomChangeTypeLoadSpan} from './Entities/LoadSpans';

import {Urgency} from './Entities';
import {UrgencyType} from './Entities';
import {UrgencyLoadSpan} from './Entities/LoadSpans';

import {Impact} from './Entities';
import {ImpactType} from './Entities';
import {ImpactLoadSpan} from './Entities/LoadSpans';

import {UrgencyImpactMapping} from './Entities';
import {UrgencyImpactMappingType} from './Entities';
import {UrgencyImpactMappingLoadSpan} from './Entities/LoadSpans';

import {ProblemAuditHistory} from './Entities';
import {ProblemAuditHistoryType} from './Entities';
import {ProblemAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {ProblemWorkHistory} from './Entities';
import {ProblemWorkHistoryType} from './Entities';
import {ProblemWorkHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeAuditHistory} from './Entities';
import {ChangeAuditHistoryType} from './Entities';
import {ChangeAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {SupportRepresentativeCheckIn} from './Entities';
import {SupportRepresentativeCheckInType} from './Entities';
import {SupportRepresentativeCheckInLoadSpan} from './Entities/LoadSpans';

import {ChangeWorkHistory} from './Entities';
import {ChangeWorkHistoryType} from './Entities';
import {ChangeWorkHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeApprovalHistory} from './Entities';
import {ChangeApprovalHistoryType} from './Entities';
import {ChangeApprovalHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeSLAHistory} from './Entities';
import {ChangeSLAHistoryType} from './Entities';
import {ChangeSLAHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeCustomerWorkHistory} from './Entities';
import {ChangeCustomerWorkHistoryType} from './Entities';
import {ChangeCustomerWorkHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeRuleGroupHistory} from './Entities';
import {ChangeRuleGroupHistoryType} from './Entities';
import {ChangeRuleGroupHistoryLoadSpan} from './Entities/LoadSpans';

import {PurchaseRuleGroupHistory} from './Entities';
import {PurchaseRuleGroupHistoryType} from './Entities';
import {PurchaseRuleGroupHistoryLoadSpan} from './Entities/LoadSpans';

import {KnowledgeEntryRuleGroupHistory} from './Entities';
import {KnowledgeEntryRuleGroupHistoryType} from './Entities';
import {KnowledgeEntryRuleGroupHistoryLoadSpan} from './Entities/LoadSpans';

import {Problem} from './Entities';
import {ProblemType} from './Entities';
import {ProblemLoadSpan} from './Entities/LoadSpans';

import {ProblemRuleGroupHistory} from './Entities';
import {ProblemRuleGroupHistoryType} from './Entities';
import {ProblemRuleGroupHistoryLoadSpan} from './Entities/LoadSpans';

import {Change} from './Entities';
import {ChangeType} from './Entities';
import {ChangeLoadSpan} from './Entities/LoadSpans';

import {Purchase} from './Entities';
import {PurchaseType} from './Entities';
import {PurchaseLoadSpan} from './Entities/LoadSpans';

import {PurchaseAuditHistory} from './Entities';
import {PurchaseAuditHistoryType} from './Entities';
import {PurchaseAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {PurchaseApprovalHistory} from './Entities';
import {PurchaseApprovalHistoryType} from './Entities';
import {PurchaseApprovalHistoryLoadSpan} from './Entities/LoadSpans';

import {PurchaseCustomerWorkHistory} from './Entities';
import {PurchaseCustomerWorkHistoryType} from './Entities';
import {PurchaseCustomerWorkHistoryLoadSpan} from './Entities/LoadSpans';

import {PurchaseAttachment} from './Entities';
import {PurchaseAttachmentType} from './Entities';
import {PurchaseAttachmentLoadSpan} from './Entities/LoadSpans';

import {ServiceContractAttachment} from './Entities';
import {ServiceContractAttachmentType} from './Entities';
import {ServiceContractAttachmentLoadSpan} from './Entities/LoadSpans';

import {ServiceContractAuditHistory} from './Entities';
import {ServiceContractAuditHistoryType} from './Entities';
import {ServiceContractAuditHistoryLoadSpan} from './Entities/LoadSpans';

import {ServiceContractCorrespondenceHistory} from './Entities';
import {ServiceContractCorrespondenceHistoryType} from './Entities';
import {ServiceContractCorrespondenceHistoryLoadSpan} from './Entities/LoadSpans';

import {ServiceContract} from './Entities';
import {ServiceContractType} from './Entities';
import {ServiceContractLoadSpan} from './Entities/LoadSpans';

import {SelfHelpGuideItem} from './Entities';
import {SelfHelpGuideItemType} from './Entities';
import {SelfHelpGuideItemLoadSpan} from './Entities/LoadSpans';

import {CostCenter} from './Entities';
import {CostCenterType} from './Entities';
import {CostCenterLoadSpan} from './Entities/LoadSpans';

import {JobFunction} from './Entities';
import {JobFunctionType} from './Entities';
import {JobFunctionLoadSpan} from './Entities/LoadSpans';

import {ChangeTemplate} from './Entities';
import {ChangeTemplateType} from './Entities';
import {ChangeTemplateLoadSpan} from './Entities/LoadSpans';

import {ChangeTemplateAttachment} from './Entities';
import {ChangeTemplateAttachmentType} from './Entities';
import {ChangeTemplateAttachmentLoadSpan} from './Entities/LoadSpans';

import {ProblemAttachment} from './Entities';
import {ProblemAttachmentType} from './Entities';
import {ProblemAttachmentLoadSpan} from './Entities/LoadSpans';

import {ChangeAttachment} from './Entities';
import {ChangeAttachmentType} from './Entities';
import {ChangeAttachmentLoadSpan} from './Entities/LoadSpans';

import {IncidentAttachment} from './Entities';
import {IncidentAttachmentType} from './Entities';
import {IncidentAttachmentLoadSpan} from './Entities/LoadSpans';

import {KnowledgeEntryAttachment} from './Entities';
import {KnowledgeEntryAttachmentType} from './Entities';
import {KnowledgeEntryAttachmentLoadSpan} from './Entities/LoadSpans';

import {SocialClientDocument} from './Entities';
import {SocialClientDocumentType} from './Entities';
import {SocialClientDocumentLoadSpan} from './Entities/LoadSpans';

import {Correspondence} from './Entities';
import {CorrespondenceType} from './Entities';
import {CorrespondenceLoadSpan} from './Entities/LoadSpans';

import {CorrespondenceAttachment} from './Entities';
import {CorrespondenceAttachmentType} from './Entities';
import {CorrespondenceAttachmentLoadSpan} from './Entities/LoadSpans';

import {AssetAttachment} from './Entities';
import {AssetAttachmentType} from './Entities';
import {AssetAttachmentLoadSpan} from './Entities/LoadSpans';

import {Headline} from './Entities';
import {HeadlineType} from './Entities';
import {HeadlineLoadSpan} from './Entities/LoadSpans';

import {FrequentlyAskedQuestion} from './Entities';
import {FrequentlyAskedQuestionType} from './Entities';
import {FrequentlyAskedQuestionLoadSpan} from './Entities/LoadSpans';

import {FrequentlyAskedQuestionTopic} from './Entities';
import {FrequentlyAskedQuestionTopicType} from './Entities';
import {FrequentlyAskedQuestionTopicLoadSpan} from './Entities/LoadSpans';

import {Product} from './Entities';
import {ProductType} from './Entities';
import {ProductLoadSpan} from './Entities/LoadSpans';

import {VendorProduct} from './Entities';
import {VendorProductType} from './Entities';
import {VendorProductLoadSpan} from './Entities/LoadSpans';

import {PurchaseProduct} from './Entities';
import {PurchaseProductType} from './Entities';
import {PurchaseProductLoadSpan} from './Entities/LoadSpans';

import {PurchaseTemplate} from './Entities';
import {PurchaseTemplateType} from './Entities';
import {PurchaseTemplateLoadSpan} from './Entities/LoadSpans';

import {PurchaseTemplateAttachment} from './Entities';
import {PurchaseTemplateAttachmentType} from './Entities';
import {PurchaseTemplateAttachmentLoadSpan} from './Entities/LoadSpans';

import {TemplateProduct} from './Entities';
import {TemplateProductType} from './Entities';
import {TemplateProductLoadSpan} from './Entities/LoadSpans';

import {Query} from './Entities';
import {QueryType} from './Entities';
import {QueryLoadSpan} from './Entities/LoadSpans';

import {QueryChart} from './Entities';
import {QueryChartType} from './Entities';
import {QueryChartLoadSpan} from './Entities/LoadSpans';

import {AssetRDBIntegrationDefinition} from './Entities';
import {AssetRDBIntegrationDefinitionType} from './Entities';
import {AssetRDBIntegrationDefinitionLoadSpan} from './Entities/LoadSpans';

import {CustomFieldDefinition} from './Entities';
import {CustomFieldDefinitionType} from './Entities';
import {CustomFieldDefinitionLoadSpan} from './Entities/LoadSpans';

import {CustomFieldCollection} from './Entities';
import {CustomFieldCollectionType} from './Entities';
import {CustomFieldCollectionLoadSpan} from './Entities/LoadSpans';

import {CustomFieldValue} from './Entities';
import {CustomFieldValueType} from './Entities';
import {CustomFieldValueLoadSpan} from './Entities/LoadSpans';

import {CustomFieldDataSource} from './Entities';
import {CustomFieldDataSourceType} from './Entities';
import {CustomFieldDataSourceLoadSpan} from './Entities/LoadSpans';

import {CustomFieldDataSourceItem} from './Entities';
import {CustomFieldDataSourceItemType} from './Entities';
import {CustomFieldDataSourceItemLoadSpan} from './Entities/LoadSpans';

import {CustomFieldDependency} from './Entities';
import {CustomFieldDependencyType} from './Entities';
import {CustomFieldDependencyLoadSpan} from './Entities/LoadSpans';

import {CustomNumberDefinition} from './Entities';
import {CustomNumberDefinitionType} from './Entities';
import {CustomNumberDefinitionLoadSpan} from './Entities/LoadSpans';

import {IncidentDeletionShadow} from './Entities';
import {IncidentDeletionShadowType} from './Entities';
import {IncidentDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {ChangeDeletionShadow} from './Entities';
import {ChangeDeletionShadowType} from './Entities';
import {ChangeDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {ProblemDeletionShadow} from './Entities';
import {ProblemDeletionShadowType} from './Entities';
import {ProblemDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {OpportunityDeletionShadow} from './Entities';
import {OpportunityDeletionShadowType} from './Entities';
import {OpportunityDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {PurchaseDeletionShadow} from './Entities';
import {PurchaseDeletionShadowType} from './Entities';
import {PurchaseDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {KnowledgeDeletionShadow} from './Entities';
import {KnowledgeDeletionShadowType} from './Entities';
import {KnowledgeDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {AssetDeletionShadow} from './Entities';
import {AssetDeletionShadowType} from './Entities';
import {AssetDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {CorrespondenceDeletionShadow} from './Entities';
import {CorrespondenceDeletionShadowType} from './Entities';
import {CorrespondenceDeletionShadowLoadSpan} from './Entities/LoadSpans';

import {ArchivedIncident} from './Entities';
import {ArchivedIncidentType} from './Entities';
import {ArchivedIncidentLoadSpan} from './Entities/LoadSpans';

import {ArchivedAsset} from './Entities';
import {ArchivedAssetType} from './Entities';
import {ArchivedAssetLoadSpan} from './Entities/LoadSpans';

import {ArchivedCorrespondence} from './Entities';
import {ArchivedCorrespondenceType} from './Entities';
import {ArchivedCorrespondenceLoadSpan} from './Entities/LoadSpans';

import {ArchivedCorrespondenceAttachment} from './Entities';
import {ArchivedCorrespondenceAttachmentType} from './Entities';
import {ArchivedCorrespondenceAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedCustomField} from './Entities';
import {ArchivedCustomFieldType} from './Entities';
import {ArchivedCustomFieldLoadSpan} from './Entities/LoadSpans';

import {ArchivedCorrespondenceRecipient} from './Entities';
import {ArchivedCorrespondenceRecipientType} from './Entities';
import {ArchivedCorrespondenceRecipientLoadSpan} from './Entities/LoadSpans';

import {ArchivedIncidentAttachment} from './Entities';
import {ArchivedIncidentAttachmentType} from './Entities';
import {ArchivedIncidentAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedChange} from './Entities';
import {ArchivedChangeType} from './Entities';
import {ArchivedChangeLoadSpan} from './Entities/LoadSpans';

import {ArchivedChangeAsset} from './Entities';
import {ArchivedChangeAssetType} from './Entities';
import {ArchivedChangeAssetLoadSpan} from './Entities/LoadSpans';

import {ArchivedChangeCorrespondence} from './Entities';
import {ArchivedChangeCorrespondenceType} from './Entities';
import {ArchivedChangeCorrespondenceLoadSpan} from './Entities/LoadSpans';

import {ArchivedChangeCorrespondenceAttachment} from './Entities';
import {ArchivedChangeCorrespondenceAttachmentType} from './Entities';
import {ArchivedChangeCorrespondenceAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedChangeCustomField} from './Entities';
import {ArchivedChangeCustomFieldType} from './Entities';
import {ArchivedChangeCustomFieldLoadSpan} from './Entities/LoadSpans';

import {ArchivedChangeCorrespondenceRecipient} from './Entities';
import {ArchivedChangeCorrespondenceRecipientType} from './Entities';
import {ArchivedChangeCorrespondenceRecipientLoadSpan} from './Entities/LoadSpans';

import {ArchivedChangeAttachment} from './Entities';
import {ArchivedChangeAttachmentType} from './Entities';
import {ArchivedChangeAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblem} from './Entities';
import {ArchivedProblemType} from './Entities';
import {ArchivedProblemLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblemAsset} from './Entities';
import {ArchivedProblemAssetType} from './Entities';
import {ArchivedProblemAssetLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblemCorrespondence} from './Entities';
import {ArchivedProblemCorrespondenceType} from './Entities';
import {ArchivedProblemCorrespondenceLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblemCorrespondenceAttachment} from './Entities';
import {ArchivedProblemCorrespondenceAttachmentType} from './Entities';
import {ArchivedProblemCorrespondenceAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblemCustomField} from './Entities';
import {ArchivedProblemCustomFieldType} from './Entities';
import {ArchivedProblemCustomFieldLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblemCorrespondenceRecipient} from './Entities';
import {ArchivedProblemCorrespondenceRecipientType} from './Entities';
import {ArchivedProblemCorrespondenceRecipientLoadSpan} from './Entities/LoadSpans';

import {ArchivedProblemAttachment} from './Entities';
import {ArchivedProblemAttachmentType} from './Entities';
import {ArchivedProblemAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchase} from './Entities';
import {ArchivedPurchaseType} from './Entities';
import {ArchivedPurchaseLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseProduct} from './Entities';
import {ArchivedPurchaseProductType} from './Entities';
import {ArchivedPurchaseProductLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseAsset} from './Entities';
import {ArchivedPurchaseAssetType} from './Entities';
import {ArchivedPurchaseAssetLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseCorrespondence} from './Entities';
import {ArchivedPurchaseCorrespondenceType} from './Entities';
import {ArchivedPurchaseCorrespondenceLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseCorrespondenceAttachment} from './Entities';
import {ArchivedPurchaseCorrespondenceAttachmentType} from './Entities';
import {ArchivedPurchaseCorrespondenceAttachmentLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseCustomField} from './Entities';
import {ArchivedPurchaseCustomFieldType} from './Entities';
import {ArchivedPurchaseCustomFieldLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseCorrespondenceRecipient} from './Entities';
import {ArchivedPurchaseCorrespondenceRecipientType} from './Entities';
import {ArchivedPurchaseCorrespondenceRecipientLoadSpan} from './Entities/LoadSpans';

import {ArchivedPurchaseAttachment} from './Entities';
import {ArchivedPurchaseAttachmentType} from './Entities';
import {ArchivedPurchaseAttachmentLoadSpan} from './Entities/LoadSpans';

import {WorkflowApprovalCycle} from './Entities';
import {WorkflowApprovalCycleType} from './Entities';
import {WorkflowApprovalCycleLoadSpan} from './Entities/LoadSpans';

import {WorkflowApprovalCycleHistory} from './Entities';
import {WorkflowApprovalCycleHistoryType} from './Entities';
import {WorkflowApprovalCycleHistoryLoadSpan} from './Entities/LoadSpans';

import {WorkflowCycleApprover} from './Entities';
import {WorkflowCycleApproverType} from './Entities';
import {WorkflowCycleApproverLoadSpan} from './Entities/LoadSpans';

import {WorkflowCycleApproverHistory} from './Entities';
import {WorkflowCycleApproverHistoryType} from './Entities';
import {WorkflowCycleApproverHistoryLoadSpan} from './Entities/LoadSpans';

import {IncidentWorkflowGroup} from './Entities';
import {IncidentWorkflowGroupType} from './Entities';
import {IncidentWorkflowGroupLoadSpan} from './Entities/LoadSpans';

import {ChangeWorkflowGroup} from './Entities';
import {ChangeWorkflowGroupType} from './Entities';
import {ChangeWorkflowGroupLoadSpan} from './Entities/LoadSpans';

import {PurchaseWorkflowGroup} from './Entities';
import {PurchaseWorkflowGroupType} from './Entities';
import {PurchaseWorkflowGroupLoadSpan} from './Entities/LoadSpans';

import {ConfigurationItem} from './Entities';
import {ConfigurationItemEntityType} from './Entities';
import {ConfigurationItemLoadSpan} from './Entities/LoadSpans';

import {ConfigurationItemType} from './Entities';
import {ConfigurationItemTypeEntityType} from './Entities';
import {ConfigurationItemTypeLoadSpan} from './Entities/LoadSpans';

import {ConfigurationItemCorrespondenceHistory} from './Entities';
import {ConfigurationItemCorrespondenceHistoryType} from './Entities';
import {ConfigurationItemCorrespondenceHistoryLoadSpan} from './Entities/LoadSpans';

import {CompanyStatus} from './Entities';
import {CompanyStatusType} from './Entities';
import {CompanyStatusLoadSpan} from './Entities/LoadSpans';

import {GlobalConfiguration} from './Entities';
import {GlobalConfigurationType} from './Entities';
import {GlobalConfigurationLoadSpan} from './Entities/LoadSpans';

import {AssetConfiguration} from './Entities';
import {AssetConfigurationType} from './Entities';
import {AssetConfigurationLoadSpan} from './Entities/LoadSpans';

import {IncidentConfiguration} from './Entities';
import {IncidentConfigurationType} from './Entities';
import {IncidentConfigurationLoadSpan} from './Entities/LoadSpans';

import {ConfigurationGroup} from './Entities';
import {ConfigurationGroupType} from './Entities';
import {ConfigurationGroupLoadSpan} from './Entities/LoadSpans';

import {SocialClientQuery} from './Entities';
import {SocialClientQueryType} from './Entities';
import {SocialClientQueryLoadSpan} from './Entities/LoadSpans';

import {EntityFollowProfile} from './Entities';
import {EntityFollowProfileType} from './Entities';
import {EntityFollowProfileLoadSpan} from './Entities/LoadSpans';

import {EntityFollowFilter} from './Entities';
import {EntityFollowFilterType} from './Entities';
import {EntityFollowFilterLoadSpan} from './Entities/LoadSpans';

import {LinkedOpenIdAccount} from './Entities';
import {LinkedOpenIdAccountType} from './Entities';
import {LinkedOpenIdAccountLoadSpan} from './Entities/LoadSpans';

import {AccessCircle} from './Entities';
import {AccessCircleType} from './Entities';
import {AccessCircleLoadSpan} from './Entities/LoadSpans';

import {SocialClientWallPost} from './Entities';
import {SocialClientWallPostType} from './Entities';
import {SocialClientWallPostLoadSpan} from './Entities/LoadSpans';

import {SmsInfo} from './Entities';
import {SmsInfoType} from './Entities';
import {SmsInfoLoadSpan} from './Entities/LoadSpans';

import {TwitterInfo} from './Entities';
import {TwitterInfoType} from './Entities';
import {TwitterInfoLoadSpan} from './Entities/LoadSpans';

import {SocialNotification} from './Entities';
import {SocialNotificationType} from './Entities';
import {SocialNotificationLoadSpan} from './Entities/LoadSpans';

import {SmsCarrier} from './Entities';
import {SmsCarrierType} from './Entities';
import {SmsCarrierLoadSpan} from './Entities/LoadSpans';

import {FacebookIntegrationInfo} from './Entities';
import {FacebookIntegrationInfoType} from './Entities';
import {FacebookIntegrationInfoLoadSpan} from './Entities/LoadSpans';

import {TwitterIntegrationInfo} from './Entities';
import {TwitterIntegrationInfoType} from './Entities';
import {TwitterIntegrationInfoLoadSpan} from './Entities/LoadSpans';

import {LinkedInIntegrationInfo} from './Entities';
import {LinkedInIntegrationInfoType} from './Entities';
import {LinkedInIntegrationInfoLoadSpan} from './Entities/LoadSpans';

import {SingleSignOnIntegration} from './Entities';
import {SingleSignOnIntegrationType} from './Entities';
import {SingleSignOnIntegrationLoadSpan} from './Entities/LoadSpans';

import {MobileSettings} from './Entities';
import {MobileSettingsType} from './Entities';
import {MobileSettingsLoadSpan} from './Entities/LoadSpans';

import {IncidentLayout} from './Entities';
import {IncidentLayoutType} from './Entities';
import {IncidentLayoutLoadSpan} from './Entities/LoadSpans';

import {CustomerLayout} from './Entities';
import {CustomerLayoutType} from './Entities';
import {CustomerLayoutLoadSpan} from './Entities/LoadSpans';

import {ChangeLayout} from './Entities';
import {ChangeLayoutType} from './Entities';
import {ChangeLayoutLoadSpan} from './Entities/LoadSpans';

import {ProblemLayout} from './Entities';
import {ProblemLayoutType} from './Entities';
import {ProblemLayoutLoadSpan} from './Entities/LoadSpans';

import {KnowledgeLayout} from './Entities';
import {KnowledgeLayoutType} from './Entities';
import {KnowledgeLayoutLoadSpan} from './Entities/LoadSpans';

import {PurchaseLayout} from './Entities';
import {PurchaseLayoutType} from './Entities';
import {PurchaseLayoutLoadSpan} from './Entities/LoadSpans';

import {ServiceContractLayout} from './Entities';
import {ServiceContractLayoutType} from './Entities';
import {ServiceContractLayoutLoadSpan} from './Entities/LoadSpans';

import {IncidentRepChatHistory} from './Entities';
import {IncidentRepChatHistoryType} from './Entities';
import {IncidentRepChatHistoryLoadSpan} from './Entities/LoadSpans';

import {ChangeRepChatHistory} from './Entities';
import {ChangeRepChatHistoryType} from './Entities';
import {ChangeRepChatHistoryLoadSpan} from './Entities/LoadSpans';

import {ProblemRepChatHistory} from './Entities';
import {ProblemRepChatHistoryType} from './Entities';
import {ProblemRepChatHistoryLoadSpan} from './Entities/LoadSpans';

import {PurchaseRepChatHistory} from './Entities';
import {PurchaseRepChatHistoryType} from './Entities';
import {PurchaseRepChatHistoryLoadSpan} from './Entities/LoadSpans';

import {RepChatHistory} from './Entities';
import {RepChatHistoryType} from './Entities';
import {RepChatHistoryLoadSpan} from './Entities/LoadSpans';

import {IncidentCustomerChatSession} from './Entities';
import {IncidentCustomerChatSessionType} from './Entities';
import {IncidentCustomerChatSessionLoadSpan} from './Entities/LoadSpans';

import {IncidentCustomerChatHistory} from './Entities';
import {IncidentCustomerChatHistoryType} from './Entities';
import {IncidentCustomerChatHistoryLoadSpan} from './Entities/LoadSpans';

import {OpportunityRepChatHistory} from './Entities';
import {OpportunityRepChatHistoryType} from './Entities';
import {OpportunityRepChatHistoryLoadSpan} from './Entities/LoadSpans';

import {CorrespondenceCampaignMessage} from './Entities';
import {CorrespondenceCampaignMessageType} from './Entities';
import {CorrespondenceCampaignMessageLoadSpan} from './Entities/LoadSpans';

import {Opportunity} from './Entities';
import {OpportunityEntityType} from './Entities';
import {OpportunityLoadSpan} from './Entities/LoadSpans';

import {OpportunityType} from './Entities';
import {OpportunityTypeEntityType} from './Entities';
import {OpportunityTypeLoadSpan} from './Entities/LoadSpans';

import {OpportunityStage} from './Entities';
import {OpportunityStageType} from './Entities';
import {OpportunityStageLoadSpan} from './Entities/LoadSpans';

import {OpportunityLineItem} from './Entities';
import {OpportunityLineItemType} from './Entities';
import {OpportunityLineItemLoadSpan} from './Entities/LoadSpans';

import {OpportunityLineItemGroup} from './Entities';
import {OpportunityLineItemGroupType} from './Entities';
import {OpportunityLineItemGroupLoadSpan} from './Entities/LoadSpans';

import {OpportunityTerm} from './Entities';
import {OpportunityTermType} from './Entities';
import {OpportunityTermLoadSpan} from './Entities/LoadSpans';

import {OpportunityAttachment} from './Entities';
import {OpportunityAttachmentType} from './Entities';
import {OpportunityAttachmentLoadSpan} from './Entities/LoadSpans';

import {WorkHistoryType} from './Entities';
import {WorkHistoryTypeType} from './Entities';
import {WorkHistoryTypeLoadSpan} from './Entities/LoadSpans';

import {DeviceDetectionRule} from './Entities';
import {DeviceDetectionRuleType} from './Entities';
import {DeviceDetectionRuleLoadSpan} from './Entities/LoadSpans';

import {CustomIcon} from './Entities';
import {CustomIconType} from './Entities';
import {CustomIconLoadSpan} from './Entities/LoadSpans';

import {CustomIconSizes} from './Entities';
import {CustomIconSizesType} from './Entities';
import {CustomIconSizesLoadSpan} from './Entities/LoadSpans';

import {AdditionalFollowup} from './Entities';
import {AdditionalFollowupType} from './Entities';
import {AdditionalFollowupLoadSpan} from './Entities/LoadSpans';

import {Poll} from './Entities';
import {PollType} from './Entities';
import {PollLoadSpan} from './Entities/LoadSpans';

import {PollAnswer} from './Entities';
import {PollAnswerType} from './Entities';
import {PollAnswerLoadSpan} from './Entities/LoadSpans';

import {PollVote} from './Entities';
import {PollVoteType} from './Entities';
import {PollVoteLoadSpan} from './Entities/LoadSpans';

import {ExternalLink} from './Entities';
import {ExternalLinkType} from './Entities';
import {ExternalLinkLoadSpan} from './Entities/LoadSpans';

import {Survey} from './Entities';
import {SurveyType} from './Entities';
import {SurveyLoadSpan} from './Entities/LoadSpans';

import {SurveyQuestion} from './Entities';
import {SurveyQuestionType} from './Entities';
import {SurveyQuestionLoadSpan} from './Entities/LoadSpans';

import {SurveyAssociatedQuestion} from './Entities';
import {SurveyAssociatedQuestionType} from './Entities';
import {SurveyAssociatedQuestionLoadSpan} from './Entities/LoadSpans';

import {SurveyQuestionDisplayCondition} from './Entities';
import {SurveyQuestionDisplayConditionType} from './Entities';
import {SurveyQuestionDisplayConditionLoadSpan} from './Entities/LoadSpans';

import {SurveyRequest} from './Entities';
import {SurveyRequestType} from './Entities';
import {SurveyRequestLoadSpan} from './Entities/LoadSpans';

import {SurveyAnswer} from './Entities';
import {SurveyAnswerType} from './Entities';
import {SurveyAnswerLoadSpan} from './Entities/LoadSpans';

import {MySupportDashboard} from './Entities';
import {MySupportDashboardType} from './Entities';
import {MySupportDashboardLoadSpan} from './Entities/LoadSpans';

import {MySupportDashboardWidget} from './Entities';
import {MySupportDashboardWidgetType} from './Entities';
import {MySupportDashboardWidgetLoadSpan} from './Entities/LoadSpans';

import {MySupportCalendar} from './Entities';
import {MySupportCalendarType} from './Entities';
import {MySupportCalendarLoadSpan} from './Entities/LoadSpans';

import {MySupportCalendarTask} from './Entities';
import {MySupportCalendarTaskType} from './Entities';
import {MySupportCalendarTaskLoadSpan} from './Entities/LoadSpans';

import {MySupportFeed} from './Entities';
import {MySupportFeedType} from './Entities';
import {MySupportFeedLoadSpan} from './Entities/LoadSpans';

import {Tutorial} from './Entities';
import {TutorialType} from './Entities';
import {TutorialLoadSpan} from './Entities/LoadSpans';

import {TutorialStep} from './Entities';
import {TutorialStepType} from './Entities';
import {TutorialStepLoadSpan} from './Entities/LoadSpans';

import {TutorialStepImage} from './Entities';
import {TutorialStepImageType} from './Entities';
import {TutorialStepImageLoadSpan} from './Entities/LoadSpans';

import {TutorialStepTag} from './Entities';
import {TutorialStepTagType} from './Entities';
import {TutorialStepTagLoadSpan} from './Entities/LoadSpans';

import {IncidentCustomerChatAttachment} from './Entities';
import {IncidentCustomerChatAttachmentType} from './Entities';
import {IncidentCustomerChatAttachmentLoadSpan} from './Entities/LoadSpans';

export type WorkItemTypes = "incident"
  | "incidentStatus"
  | "incidentTemplate"
  | "incidentTemplateAttachment"
  | "asset"
  | "inventoryAsset"
  | "assetType"
  | "repRefreshToken"
  | "supportRepresentative"
  | "acknowledgment"
  | "group"
  | "location"
  | "serviceLevelAgreementMatrix"
  | "ruleGroup"
  | "approvalCycle"
  | "category"
  | "customer"
  | "company"
  | "endUserDesktopDefinition"
  | "socialClientOptions"
  | "socialClientNavigator"
  | "socialClientTheme"
  | "socialClientThemeImage"
  | "newsFeedOptions"
  | "repNewsFeedOptions"
  | "discussionFeedIcon"
  | "knowledgeEntry"
  | "knowledgeEntryLikeEntry"
  | "knowledgeEntryAuditHistory"
  | "assetAuditHistory"
  | "assetRuleGroupHistory"
  | "incidentAuditHistory"
  | "incidentCorrespondenceHistory"
  | "changeCorrespondenceHistory"
  | "purchaseCorrespondenceHistory"
  | "repWorkHistory"
  | "customerWorkHistory"
  | "customerSalesNotes"
  | "incidentSLAHistory"
  | "incidentApprovalHistory"
  | "incidentRuleGroupHistory"
  | "serviceCatalog"
  | "serviceCatalogEntry"
  | "userAvatarImage"
  | "builtServiceCatalogEntry"
  | "problemConfiguration"
  | "changeConfiguration"
  | "problemStatus"
  | "changeStatus"
  | "purchaseStatus"
  | "serviceContractStatus"
  | "customChangeType"
  | "urgency"
  | "impact"
  | "urgencyImpactMapping"
  | "problemAuditHistory"
  | "problemWorkHistory"
  | "changeAuditHistory"
  | "supportRepresentativeCheckIn"
  | "changeWorkHistory"
  | "changeApprovalHistory"
  | "changeSLAHistory"
  | "changeCustomerWorkHistory"
  | "changeRuleGroupHistory"
  | "purchaseRuleGroupHistory"
  | "knowledgeEntryRuleGroupHistory"
  | "problem"
  | "problemRuleGroupHistory"
  | "change"
  | "purchase"
  | "purchaseAuditHistory"
  | "purchaseApprovalHistory"
  | "purchaseCustomerWorkHistory"
  | "purchaseAttachment"
  | "serviceContractAttachment"
  | "serviceContractAuditHistory"
  | "serviceContractCorrespondenceHistory"
  | "serviceContract"
  | "selfHelpGuideItem"
  | "costCenter"
  | "jobFunction"
  | "changeTemplate"
  | "changeTemplateAttachment"
  | "problemAttachment"
  | "changeAttachment"
  | "incidentAttachment"
  | "knowledgeEntryAttachment"
  | "socialClientDocument"
  | "correspondence"
  | "correspondenceAttachment"
  | "assetAttachment"
  | "headline"
  | "frequentlyAskedQuestion"
  | "frequentlyAskedQuestionTopic"
  | "product"
  | "vendorProduct"
  | "purchaseProduct"
  | "purchaseTemplate"
  | "purchaseTemplateAttachment"
  | "templateProduct"
  | "query"
  | "queryChart"
  | "assetRDBIntegrationDefinition"
  | "customFieldDefinition"
  | "customFieldCollection"
  | "customFieldValue"
  | "customFieldDataSource"
  | "customFieldDataSourceItem"
  | "customFieldDependency"
  | "customNumberDefinition"
  | "incidentDeletionShadow"
  | "changeDeletionShadow"
  | "problemDeletionShadow"
  | "opportunityDeletionShadow"
  | "purchaseDeletionShadow"
  | "knowledgeDeletionShadow"
  | "assetDeletionShadow"
  | "correspondenceDeletionShadow"
  | "archivedIncident"
  | "archivedAsset"
  | "archivedCorrespondence"
  | "archivedCorrespondenceAttachment"
  | "archivedCustomField"
  | "archivedCorrespondenceRecipient"
  | "archivedIncidentAttachment"
  | "archivedChange"
  | "archivedChangeAsset"
  | "archivedChangeCorrespondence"
  | "archivedChangeCorrespondenceAttachment"
  | "archivedChangeCustomField"
  | "archivedChangeCorrespondenceRecipient"
  | "archivedChangeAttachment"
  | "archivedProblem"
  | "archivedProblemAsset"
  | "archivedProblemCorrespondence"
  | "archivedProblemCorrespondenceAttachment"
  | "archivedProblemCustomField"
  | "archivedProblemCorrespondenceRecipient"
  | "archivedProblemAttachment"
  | "archivedPurchase"
  | "archivedPurchaseProduct"
  | "archivedPurchaseAsset"
  | "archivedPurchaseCorrespondence"
  | "archivedPurchaseCorrespondenceAttachment"
  | "archivedPurchaseCustomField"
  | "archivedPurchaseCorrespondenceRecipient"
  | "archivedPurchaseAttachment"
  | "workflowApprovalCycle"
  | "workflowApprovalCycleHistory"
  | "workflowCycleApprover"
  | "workflowCycleApproverHistory"
  | "incidentWorkflowGroup"
  | "changeWorkflowGroup"
  | "purchaseWorkflowGroup"
  | "configurationItem"
  | "configurationItemType"
  | "configurationItemCorrespondenceHistory"
  | "companyStatus"
  | "globalConfiguration"
  | "assetConfiguration"
  | "incidentConfiguration"
  | "configurationGroup"
  | "socialClientQuery"
  | "entityFollowProfile"
  | "entityFollowFilter"
  | "linkedOpenIdAccount"
  | "accessCircle"
  | "socialClientWallPost"
  | "smsInfo"
  | "twitterInfo"
  | "socialNotification"
  | "smsCarrier"
  | "facebookIntegrationInfo"
  | "twitterIntegrationInfo"
  | "linkedInIntegrationInfo"
  | "singleSignOnIntegration"
  | "mobileSettings"
  | "incidentLayout"
  | "customerLayout"
  | "changeLayout"
  | "problemLayout"
  | "knowledgeLayout"
  | "purchaseLayout"
  | "serviceContractLayout"
  | "incidentRepChatHistory"
  | "changeRepChatHistory"
  | "problemRepChatHistory"
  | "purchaseRepChatHistory"
  | "repChatHistory"
  | "incidentCustomerChatSession"
  | "incidentCustomerChatHistory"
  | "opportunityRepChatHistory"
  | "correspondenceCampaignMessage"
  | "opportunity"
  | "opportunityType"
  | "opportunityStage"
  | "opportunityLineItem"
  | "opportunityLineItemGroup"
  | "opportunityTerm"
  | "opportunityAttachment"
  | "workHistoryType"
  | "deviceDetectionRule"
  | "customIcon"
  | "customIconSizes"
  | "additionalFollowup"
  | "poll"
  | "pollAnswer"
  | "pollVote"
  | "externalLink"
  | "survey"
  | "surveyQuestion"
  | "surveyAssociatedQuestion"
  | "surveyQuestionDisplayCondition"
  | "surveyRequest"
  | "surveyAnswer"
  | "mySupportDashboard"
  | "mySupportDashboardWidget"
  | "mySupportCalendar"
  | "mySupportCalendarTask"
  | "mySupportFeed"
  | "tutorial"
  | "tutorialStep"
  | "tutorialStepImage"
  | "tutorialStepTag"
  | "incidentCustomerChatAttachment"
  ;

export type LoadSpanType = IncidentLoadSpan
  | IncidentStatusLoadSpan
  | IncidentTemplateLoadSpan
  | IncidentTemplateAttachmentLoadSpan
  | AssetLoadSpan
  | InventoryAssetLoadSpan
  | AssetTypeLoadSpan
  | RepRefreshTokenLoadSpan
  | SupportRepresentativeLoadSpan
  | AcknowledgmentLoadSpan
  | GroupLoadSpan
  | LocationLoadSpan
  | ServiceLevelAgreementMatrixLoadSpan
  | RuleGroupLoadSpan
  | ApprovalCycleLoadSpan
  | CategoryLoadSpan
  | CustomerLoadSpan
  | CompanyLoadSpan
  | EndUserDesktopDefinitionLoadSpan
  | SocialClientOptionsLoadSpan
  | SocialClientNavigatorLoadSpan
  | SocialClientThemeLoadSpan
  | SocialClientThemeImageLoadSpan
  | NewsFeedOptionsLoadSpan
  | RepNewsFeedOptionsLoadSpan
  | DiscussionFeedIconLoadSpan
  | KnowledgeEntryLoadSpan
  | KnowledgeEntryLikeEntryLoadSpan
  | KnowledgeEntryAuditHistoryLoadSpan
  | AssetAuditHistoryLoadSpan
  | AssetRuleGroupHistoryLoadSpan
  | IncidentAuditHistoryLoadSpan
  | IncidentCorrespondenceHistoryLoadSpan
  | ChangeCorrespondenceHistoryLoadSpan
  | PurchaseCorrespondenceHistoryLoadSpan
  | RepWorkHistoryLoadSpan
  | CustomerWorkHistoryLoadSpan
  | CustomerSalesNotesLoadSpan
  | IncidentSLAHistoryLoadSpan
  | IncidentApprovalHistoryLoadSpan
  | IncidentRuleGroupHistoryLoadSpan
  | ServiceCatalogLoadSpan
  | ServiceCatalogEntryLoadSpan
  | UserAvatarImageLoadSpan
  | BuiltServiceCatalogEntryLoadSpan
  | ProblemConfigurationLoadSpan
  | ChangeConfigurationLoadSpan
  | ProblemStatusLoadSpan
  | ChangeStatusLoadSpan
  | PurchaseStatusLoadSpan
  | ServiceContractStatusLoadSpan
  | CustomChangeTypeLoadSpan
  | UrgencyLoadSpan
  | ImpactLoadSpan
  | UrgencyImpactMappingLoadSpan
  | ProblemAuditHistoryLoadSpan
  | ProblemWorkHistoryLoadSpan
  | ChangeAuditHistoryLoadSpan
  | SupportRepresentativeCheckInLoadSpan
  | ChangeWorkHistoryLoadSpan
  | ChangeApprovalHistoryLoadSpan
  | ChangeSLAHistoryLoadSpan
  | ChangeCustomerWorkHistoryLoadSpan
  | ChangeRuleGroupHistoryLoadSpan
  | PurchaseRuleGroupHistoryLoadSpan
  | KnowledgeEntryRuleGroupHistoryLoadSpan
  | ProblemLoadSpan
  | ProblemRuleGroupHistoryLoadSpan
  | ChangeLoadSpan
  | PurchaseLoadSpan
  | PurchaseAuditHistoryLoadSpan
  | PurchaseApprovalHistoryLoadSpan
  | PurchaseCustomerWorkHistoryLoadSpan
  | PurchaseAttachmentLoadSpan
  | ServiceContractAttachmentLoadSpan
  | ServiceContractAuditHistoryLoadSpan
  | ServiceContractCorrespondenceHistoryLoadSpan
  | ServiceContractLoadSpan
  | SelfHelpGuideItemLoadSpan
  | CostCenterLoadSpan
  | JobFunctionLoadSpan
  | ChangeTemplateLoadSpan
  | ChangeTemplateAttachmentLoadSpan
  | ProblemAttachmentLoadSpan
  | ChangeAttachmentLoadSpan
  | IncidentAttachmentLoadSpan
  | KnowledgeEntryAttachmentLoadSpan
  | SocialClientDocumentLoadSpan
  | CorrespondenceLoadSpan
  | CorrespondenceAttachmentLoadSpan
  | AssetAttachmentLoadSpan
  | HeadlineLoadSpan
  | FrequentlyAskedQuestionLoadSpan
  | FrequentlyAskedQuestionTopicLoadSpan
  | ProductLoadSpan
  | VendorProductLoadSpan
  | PurchaseProductLoadSpan
  | PurchaseTemplateLoadSpan
  | PurchaseTemplateAttachmentLoadSpan
  | TemplateProductLoadSpan
  | QueryLoadSpan
  | QueryChartLoadSpan
  | AssetRDBIntegrationDefinitionLoadSpan
  | CustomFieldDefinitionLoadSpan
  | CustomFieldCollectionLoadSpan
  | CustomFieldValueLoadSpan
  | CustomFieldDataSourceLoadSpan
  | CustomFieldDataSourceItemLoadSpan
  | CustomFieldDependencyLoadSpan
  | CustomNumberDefinitionLoadSpan
  | IncidentDeletionShadowLoadSpan
  | ChangeDeletionShadowLoadSpan
  | ProblemDeletionShadowLoadSpan
  | OpportunityDeletionShadowLoadSpan
  | PurchaseDeletionShadowLoadSpan
  | KnowledgeDeletionShadowLoadSpan
  | AssetDeletionShadowLoadSpan
  | CorrespondenceDeletionShadowLoadSpan
  | ArchivedIncidentLoadSpan
  | ArchivedAssetLoadSpan
  | ArchivedCorrespondenceLoadSpan
  | ArchivedCorrespondenceAttachmentLoadSpan
  | ArchivedCustomFieldLoadSpan
  | ArchivedCorrespondenceRecipientLoadSpan
  | ArchivedIncidentAttachmentLoadSpan
  | ArchivedChangeLoadSpan
  | ArchivedChangeAssetLoadSpan
  | ArchivedChangeCorrespondenceLoadSpan
  | ArchivedChangeCorrespondenceAttachmentLoadSpan
  | ArchivedChangeCustomFieldLoadSpan
  | ArchivedChangeCorrespondenceRecipientLoadSpan
  | ArchivedChangeAttachmentLoadSpan
  | ArchivedProblemLoadSpan
  | ArchivedProblemAssetLoadSpan
  | ArchivedProblemCorrespondenceLoadSpan
  | ArchivedProblemCorrespondenceAttachmentLoadSpan
  | ArchivedProblemCustomFieldLoadSpan
  | ArchivedProblemCorrespondenceRecipientLoadSpan
  | ArchivedProblemAttachmentLoadSpan
  | ArchivedPurchaseLoadSpan
  | ArchivedPurchaseProductLoadSpan
  | ArchivedPurchaseAssetLoadSpan
  | ArchivedPurchaseCorrespondenceLoadSpan
  | ArchivedPurchaseCorrespondenceAttachmentLoadSpan
  | ArchivedPurchaseCustomFieldLoadSpan
  | ArchivedPurchaseCorrespondenceRecipientLoadSpan
  | ArchivedPurchaseAttachmentLoadSpan
  | WorkflowApprovalCycleLoadSpan
  | WorkflowApprovalCycleHistoryLoadSpan
  | WorkflowCycleApproverLoadSpan
  | WorkflowCycleApproverHistoryLoadSpan
  | IncidentWorkflowGroupLoadSpan
  | ChangeWorkflowGroupLoadSpan
  | PurchaseWorkflowGroupLoadSpan
  | ConfigurationItemLoadSpan
  | ConfigurationItemTypeLoadSpan
  | ConfigurationItemCorrespondenceHistoryLoadSpan
  | CompanyStatusLoadSpan
  | GlobalConfigurationLoadSpan
  | AssetConfigurationLoadSpan
  | IncidentConfigurationLoadSpan
  | ConfigurationGroupLoadSpan
  | SocialClientQueryLoadSpan
  | EntityFollowProfileLoadSpan
  | EntityFollowFilterLoadSpan
  | LinkedOpenIdAccountLoadSpan
  | AccessCircleLoadSpan
  | SocialClientWallPostLoadSpan
  | SmsInfoLoadSpan
  | TwitterInfoLoadSpan
  | SocialNotificationLoadSpan
  | SmsCarrierLoadSpan
  | FacebookIntegrationInfoLoadSpan
  | TwitterIntegrationInfoLoadSpan
  | LinkedInIntegrationInfoLoadSpan
  | SingleSignOnIntegrationLoadSpan
  | MobileSettingsLoadSpan
  | IncidentLayoutLoadSpan
  | CustomerLayoutLoadSpan
  | ChangeLayoutLoadSpan
  | ProblemLayoutLoadSpan
  | KnowledgeLayoutLoadSpan
  | PurchaseLayoutLoadSpan
  | ServiceContractLayoutLoadSpan
  | IncidentRepChatHistoryLoadSpan
  | ChangeRepChatHistoryLoadSpan
  | ProblemRepChatHistoryLoadSpan
  | PurchaseRepChatHistoryLoadSpan
  | RepChatHistoryLoadSpan
  | IncidentCustomerChatSessionLoadSpan
  | IncidentCustomerChatHistoryLoadSpan
  | OpportunityRepChatHistoryLoadSpan
  | CorrespondenceCampaignMessageLoadSpan
  | OpportunityLoadSpan
  | OpportunityTypeLoadSpan
  | OpportunityStageLoadSpan
  | OpportunityLineItemLoadSpan
  | OpportunityLineItemGroupLoadSpan
  | OpportunityTermLoadSpan
  | OpportunityAttachmentLoadSpan
  | WorkHistoryTypeLoadSpan
  | DeviceDetectionRuleLoadSpan
  | CustomIconLoadSpan
  | CustomIconSizesLoadSpan
  | AdditionalFollowupLoadSpan
  | PollLoadSpan
  | PollAnswerLoadSpan
  | PollVoteLoadSpan
  | ExternalLinkLoadSpan
  | SurveyLoadSpan
  | SurveyQuestionLoadSpan
  | SurveyAssociatedQuestionLoadSpan
  | SurveyQuestionDisplayConditionLoadSpan
  | SurveyRequestLoadSpan
  | SurveyAnswerLoadSpan
  | MySupportDashboardLoadSpan
  | MySupportDashboardWidgetLoadSpan
  | MySupportCalendarLoadSpan
  | MySupportCalendarTaskLoadSpan
  | MySupportFeedLoadSpan
  | TutorialLoadSpan
  | TutorialStepLoadSpan
  | TutorialStepImageLoadSpan
  | TutorialStepTagLoadSpan
  | IncidentCustomerChatAttachmentLoadSpan
  ;

export type EntityFlowClass = Incident
  | IncidentStatus
  | IncidentTemplate
  | IncidentTemplateAttachment
  | Asset
  | InventoryAsset
  | AssetType
  | RepRefreshToken
  | SupportRepresentative
  | Acknowledgment
  | Group
  | Location
  | ServiceLevelAgreementMatrix
  | RuleGroup
  | ApprovalCycle
  | Category
  | Customer
  | Company
  | EndUserDesktopDefinition
  | SocialClientOptions
  | SocialClientNavigator
  | SocialClientTheme
  | SocialClientThemeImage
  | NewsFeedOptions
  | RepNewsFeedOptions
  | DiscussionFeedIcon
  | KnowledgeEntry
  | KnowledgeEntryLikeEntry
  | KnowledgeEntryAuditHistory
  | AssetAuditHistory
  | AssetRuleGroupHistory
  | IncidentAuditHistory
  | IncidentCorrespondenceHistory
  | ChangeCorrespondenceHistory
  | PurchaseCorrespondenceHistory
  | RepWorkHistory
  | CustomerWorkHistory
  | CustomerSalesNotes
  | IncidentSLAHistory
  | IncidentApprovalHistory
  | IncidentRuleGroupHistory
  | ServiceCatalog
  | ServiceCatalogEntry
  | UserAvatarImage
  | BuiltServiceCatalogEntry
  | ProblemConfiguration
  | ChangeConfiguration
  | ProblemStatus
  | ChangeStatus
  | PurchaseStatus
  | ServiceContractStatus
  | CustomChangeType
  | Urgency
  | Impact
  | UrgencyImpactMapping
  | ProblemAuditHistory
  | ProblemWorkHistory
  | ChangeAuditHistory
  | SupportRepresentativeCheckIn
  | ChangeWorkHistory
  | ChangeApprovalHistory
  | ChangeSLAHistory
  | ChangeCustomerWorkHistory
  | ChangeRuleGroupHistory
  | PurchaseRuleGroupHistory
  | KnowledgeEntryRuleGroupHistory
  | Problem
  | ProblemRuleGroupHistory
  | Change
  | Purchase
  | PurchaseAuditHistory
  | PurchaseApprovalHistory
  | PurchaseCustomerWorkHistory
  | PurchaseAttachment
  | ServiceContractAttachment
  | ServiceContractAuditHistory
  | ServiceContractCorrespondenceHistory
  | ServiceContract
  | SelfHelpGuideItem
  | CostCenter
  | JobFunction
  | ChangeTemplate
  | ChangeTemplateAttachment
  | ProblemAttachment
  | ChangeAttachment
  | IncidentAttachment
  | KnowledgeEntryAttachment
  | SocialClientDocument
  | Correspondence
  | CorrespondenceAttachment
  | AssetAttachment
  | Headline
  | FrequentlyAskedQuestion
  | FrequentlyAskedQuestionTopic
  | Product
  | VendorProduct
  | PurchaseProduct
  | PurchaseTemplate
  | PurchaseTemplateAttachment
  | TemplateProduct
  | Query
  | QueryChart
  | AssetRDBIntegrationDefinition
  | CustomFieldDefinition
  | CustomFieldCollection
  | CustomFieldValue
  | CustomFieldDataSource
  | CustomFieldDataSourceItem
  | CustomFieldDependency
  | CustomNumberDefinition
  | IncidentDeletionShadow
  | ChangeDeletionShadow
  | ProblemDeletionShadow
  | OpportunityDeletionShadow
  | PurchaseDeletionShadow
  | KnowledgeDeletionShadow
  | AssetDeletionShadow
  | CorrespondenceDeletionShadow
  | ArchivedIncident
  | ArchivedAsset
  | ArchivedCorrespondence
  | ArchivedCorrespondenceAttachment
  | ArchivedCustomField
  | ArchivedCorrespondenceRecipient
  | ArchivedIncidentAttachment
  | ArchivedChange
  | ArchivedChangeAsset
  | ArchivedChangeCorrespondence
  | ArchivedChangeCorrespondenceAttachment
  | ArchivedChangeCustomField
  | ArchivedChangeCorrespondenceRecipient
  | ArchivedChangeAttachment
  | ArchivedProblem
  | ArchivedProblemAsset
  | ArchivedProblemCorrespondence
  | ArchivedProblemCorrespondenceAttachment
  | ArchivedProblemCustomField
  | ArchivedProblemCorrespondenceRecipient
  | ArchivedProblemAttachment
  | ArchivedPurchase
  | ArchivedPurchaseProduct
  | ArchivedPurchaseAsset
  | ArchivedPurchaseCorrespondence
  | ArchivedPurchaseCorrespondenceAttachment
  | ArchivedPurchaseCustomField
  | ArchivedPurchaseCorrespondenceRecipient
  | ArchivedPurchaseAttachment
  | WorkflowApprovalCycle
  | WorkflowApprovalCycleHistory
  | WorkflowCycleApprover
  | WorkflowCycleApproverHistory
  | IncidentWorkflowGroup
  | ChangeWorkflowGroup
  | PurchaseWorkflowGroup
  | ConfigurationItem
  | ConfigurationItemType
  | ConfigurationItemCorrespondenceHistory
  | CompanyStatus
  | GlobalConfiguration
  | AssetConfiguration
  | IncidentConfiguration
  | ConfigurationGroup
  | SocialClientQuery
  | EntityFollowProfile
  | EntityFollowFilter
  | LinkedOpenIdAccount
  | AccessCircle
  | SocialClientWallPost
  | SmsInfo
  | TwitterInfo
  | SocialNotification
  | SmsCarrier
  | FacebookIntegrationInfo
  | TwitterIntegrationInfo
  | LinkedInIntegrationInfo
  | SingleSignOnIntegration
  | MobileSettings
  | IncidentLayout
  | CustomerLayout
  | ChangeLayout
  | ProblemLayout
  | KnowledgeLayout
  | PurchaseLayout
  | ServiceContractLayout
  | IncidentRepChatHistory
  | ChangeRepChatHistory
  | ProblemRepChatHistory
  | PurchaseRepChatHistory
  | RepChatHistory
  | IncidentCustomerChatSession
  | IncidentCustomerChatHistory
  | OpportunityRepChatHistory
  | CorrespondenceCampaignMessage
  | Opportunity
  | OpportunityType
  | OpportunityStage
  | OpportunityLineItem
  | OpportunityLineItemGroup
  | OpportunityTerm
  | OpportunityAttachment
  | WorkHistoryType
  | DeviceDetectionRule
  | CustomIcon
  | CustomIconSizes
  | AdditionalFollowup
  | Poll
  | PollAnswer
  | PollVote
  | ExternalLink
  | Survey
  | SurveyQuestion
  | SurveyAssociatedQuestion
  | SurveyQuestionDisplayCondition
  | SurveyRequest
  | SurveyAnswer
  | MySupportDashboard
  | MySupportDashboardWidget
  | MySupportCalendar
  | MySupportCalendarTask
  | MySupportFeed
  | Tutorial
  | TutorialStep
  | TutorialStepImage
  | TutorialStepTag
  | IncidentCustomerChatAttachment
  ;

export type EntityFlowType = IncidentType
  | IncidentStatusType
  | IncidentTemplateType
  | IncidentTemplateAttachmentType
  | AssetType
  | InventoryAssetType
  | AssetTypeEntityType
  | RepRefreshTokenType
  | SupportRepresentativeType
  | AcknowledgmentType
  | GroupType
  | LocationType
  | ServiceLevelAgreementMatrixType
  | RuleGroupType
  | ApprovalCycleType
  | CategoryType
  | CustomerType
  | CompanyType
  | EndUserDesktopDefinitionType
  | SocialClientOptionsType
  | SocialClientNavigatorType
  | SocialClientThemeType
  | SocialClientThemeImageType
  | NewsFeedOptionsType
  | RepNewsFeedOptionsType
  | DiscussionFeedIconType
  | KnowledgeEntryType
  | KnowledgeEntryLikeEntryType
  | KnowledgeEntryAuditHistoryType
  | AssetAuditHistoryType
  | AssetRuleGroupHistoryType
  | IncidentAuditHistoryType
  | IncidentCorrespondenceHistoryType
  | ChangeCorrespondenceHistoryType
  | PurchaseCorrespondenceHistoryType
  | RepWorkHistoryType
  | CustomerWorkHistoryType
  | CustomerSalesNotesType
  | IncidentSLAHistoryType
  | IncidentApprovalHistoryType
  | IncidentRuleGroupHistoryType
  | ServiceCatalogType
  | ServiceCatalogEntryType
  | UserAvatarImageType
  | BuiltServiceCatalogEntryType
  | ProblemConfigurationType
  | ChangeConfigurationType
  | ProblemStatusType
  | ChangeStatusType
  | PurchaseStatusType
  | ServiceContractStatusType
  | CustomChangeTypeType
  | UrgencyType
  | ImpactType
  | UrgencyImpactMappingType
  | ProblemAuditHistoryType
  | ProblemWorkHistoryType
  | ChangeAuditHistoryType
  | SupportRepresentativeCheckInType
  | ChangeWorkHistoryType
  | ChangeApprovalHistoryType
  | ChangeSLAHistoryType
  | ChangeCustomerWorkHistoryType
  | ChangeRuleGroupHistoryType
  | PurchaseRuleGroupHistoryType
  | KnowledgeEntryRuleGroupHistoryType
  | ProblemType
  | ProblemRuleGroupHistoryType
  | ChangeType
  | PurchaseType
  | PurchaseAuditHistoryType
  | PurchaseApprovalHistoryType
  | PurchaseCustomerWorkHistoryType
  | PurchaseAttachmentType
  | ServiceContractAttachmentType
  | ServiceContractAuditHistoryType
  | ServiceContractCorrespondenceHistoryType
  | ServiceContractType
  | SelfHelpGuideItemType
  | CostCenterType
  | JobFunctionType
  | ChangeTemplateType
  | ChangeTemplateAttachmentType
  | ProblemAttachmentType
  | ChangeAttachmentType
  | IncidentAttachmentType
  | KnowledgeEntryAttachmentType
  | SocialClientDocumentType
  | CorrespondenceType
  | CorrespondenceAttachmentType
  | AssetAttachmentType
  | HeadlineType
  | FrequentlyAskedQuestionType
  | FrequentlyAskedQuestionTopicType
  | ProductType
  | VendorProductType
  | PurchaseProductType
  | PurchaseTemplateType
  | PurchaseTemplateAttachmentType
  | TemplateProductType
  | QueryType
  | QueryChartType
  | AssetRDBIntegrationDefinitionType
  | CustomFieldDefinitionType
  | CustomFieldCollectionType
  | CustomFieldValueType
  | CustomFieldDataSourceType
  | CustomFieldDataSourceItemType
  | CustomFieldDependencyType
  | CustomNumberDefinitionType
  | IncidentDeletionShadowType
  | ChangeDeletionShadowType
  | ProblemDeletionShadowType
  | OpportunityDeletionShadowType
  | PurchaseDeletionShadowType
  | KnowledgeDeletionShadowType
  | AssetDeletionShadowType
  | CorrespondenceDeletionShadowType
  | ArchivedIncidentType
  | ArchivedAssetType
  | ArchivedCorrespondenceType
  | ArchivedCorrespondenceAttachmentType
  | ArchivedCustomFieldType
  | ArchivedCorrespondenceRecipientType
  | ArchivedIncidentAttachmentType
  | ArchivedChangeType
  | ArchivedChangeAssetType
  | ArchivedChangeCorrespondenceType
  | ArchivedChangeCorrespondenceAttachmentType
  | ArchivedChangeCustomFieldType
  | ArchivedChangeCorrespondenceRecipientType
  | ArchivedChangeAttachmentType
  | ArchivedProblemType
  | ArchivedProblemAssetType
  | ArchivedProblemCorrespondenceType
  | ArchivedProblemCorrespondenceAttachmentType
  | ArchivedProblemCustomFieldType
  | ArchivedProblemCorrespondenceRecipientType
  | ArchivedProblemAttachmentType
  | ArchivedPurchaseType
  | ArchivedPurchaseProductType
  | ArchivedPurchaseAssetType
  | ArchivedPurchaseCorrespondenceType
  | ArchivedPurchaseCorrespondenceAttachmentType
  | ArchivedPurchaseCustomFieldType
  | ArchivedPurchaseCorrespondenceRecipientType
  | ArchivedPurchaseAttachmentType
  | WorkflowApprovalCycleType
  | WorkflowApprovalCycleHistoryType
  | WorkflowCycleApproverType
  | WorkflowCycleApproverHistoryType
  | IncidentWorkflowGroupType
  | ChangeWorkflowGroupType
  | PurchaseWorkflowGroupType
  | ConfigurationItemType
  | ConfigurationItemTypeEntityType
  | ConfigurationItemCorrespondenceHistoryType
  | CompanyStatusType
  | GlobalConfigurationType
  | AssetConfigurationType
  | IncidentConfigurationType
  | ConfigurationGroupType
  | SocialClientQueryType
  | EntityFollowProfileType
  | EntityFollowFilterType
  | LinkedOpenIdAccountType
  | AccessCircleType
  | SocialClientWallPostType
  | SmsInfoType
  | TwitterInfoType
  | SocialNotificationType
  | SmsCarrierType
  | FacebookIntegrationInfoType
  | TwitterIntegrationInfoType
  | LinkedInIntegrationInfoType
  | SingleSignOnIntegrationType
  | MobileSettingsType
  | IncidentLayoutType
  | CustomerLayoutType
  | ChangeLayoutType
  | ProblemLayoutType
  | KnowledgeLayoutType
  | PurchaseLayoutType
  | ServiceContractLayoutType
  | IncidentRepChatHistoryType
  | ChangeRepChatHistoryType
  | ProblemRepChatHistoryType
  | PurchaseRepChatHistoryType
  | RepChatHistoryType
  | IncidentCustomerChatSessionType
  | IncidentCustomerChatHistoryType
  | OpportunityRepChatHistoryType
  | CorrespondenceCampaignMessageType
  | OpportunityType
  | OpportunityTypeEntityType
  | OpportunityStageType
  | OpportunityLineItemType
  | OpportunityLineItemGroupType
  | OpportunityTermType
  | OpportunityAttachmentType
  | WorkHistoryTypeType
  | DeviceDetectionRuleType
  | CustomIconType
  | CustomIconSizesType
  | AdditionalFollowupType
  | PollType
  | PollAnswerType
  | PollVoteType
  | ExternalLinkType
  | SurveyType
  | SurveyQuestionType
  | SurveyAssociatedQuestionType
  | SurveyQuestionDisplayConditionType
  | SurveyRequestType
  | SurveyAnswerType
  | MySupportDashboardType
  | MySupportDashboardWidgetType
  | MySupportCalendarType
  | MySupportCalendarTaskType
  | MySupportFeedType
  | TutorialType
  | TutorialStepType
  | TutorialStepImageType
  | TutorialStepTagType
  | IncidentCustomerChatAttachmentType
  ;

export type ServiceError = {
  message: string
}

export type CountResponse = {
  count: number,
  controller: WorkItemTypes
}

export type CollectionResponse = {
  collection: Array<EntityFlowType>,
  controller: WorkItemTypes
}

export type GetResponse = {
  item: EntityFlowType,
  controller: WorkItemTypes
}

export type UpdateRepFieldRequest = {
  field: string,
  rep: SupportRepresentative
}
