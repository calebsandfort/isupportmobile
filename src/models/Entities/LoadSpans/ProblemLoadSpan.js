//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import ProblemStatusLoadSpan from './ProblemStatusLoadSpan';
import IncidentLoadSpan from './IncidentLoadSpan';
import PurchaseLoadSpan from './PurchaseLoadSpan';
import ImpactLoadSpan from './ImpactLoadSpan';
import UrgencyLoadSpan from './UrgencyLoadSpan';
import RuleGroupLoadSpan from './RuleGroupLoadSpan';

export class ProblemLoadSpan {
  guid: boolean;
  number: boolean;
  createdDate: boolean;
  modifiedDate: boolean;
  closedDate: boolean;
  shortDescription: boolean;
  longDescription: boolean;
  rootCause: boolean;
  workAround: boolean;
  resolution: boolean;
  routeCount: boolean;
  customNumber: boolean;
  userBrowser: boolean;
  userDevice: boolean;
  priority: boolean;
  publishedStatus: boolean;
  source: boolean;
  assignee: SupportRepresentativeLoadSpan;
  previousAssignee: SupportRepresentativeLoadSpan;
  author: SupportRepresentativeLoadSpan;
  modifiedBy: SupportRepresentativeLoadSpan;
  closedBy: SupportRepresentativeLoadSpan;
  category: CategoryLoadSpan;
  group: GroupLoadSpan;
  status: ProblemStatusLoadSpan;
  sourceIncident: IncidentLoadSpan;
  sourcePurchase: PurchaseLoadSpan;
  impact: ImpactLoadSpan;
  urgency: UrgencyLoadSpan;
  staticEffectiveRuleGroup: RuleGroupLoadSpan;

  constructor(){
    this.guid = false;
    this.number = false;
    this.createdDate = false;
    this.modifiedDate = false;
    this.closedDate = false;
    this.shortDescription = false;
    this.longDescription = false;
    this.rootCause = false;
    this.workAround = false;
    this.resolution = false;
    this.routeCount = false;
    this.customNumber = false;
    this.userBrowser = false;
    this.userDevice = false;
    this.priority = false;
    this.publishedStatus = false;
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

  get statusLoadSpan(): ProblemStatusLoadSpan {
    if(!this.status){
		this.status = new ProblemStatusLoadSpan();
	}

    return this.status;
  }

  get sourceIncidentLoadSpan(): IncidentLoadSpan {
    if(!this.sourceIncident){
		this.sourceIncident = new IncidentLoadSpan();
	}

    return this.sourceIncident;
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

  get staticEffectiveRuleGroupLoadSpan(): RuleGroupLoadSpan {
    if(!this.staticEffectiveRuleGroup){
		this.staticEffectiveRuleGroup = new RuleGroupLoadSpan();
	}

    return this.staticEffectiveRuleGroup;
  }

  loadAllProperties() {
    this.guid = true;
    this.number = true;
    this.createdDate = true;
    this.modifiedDate = true;
    this.closedDate = true;
    this.shortDescription = true;
    this.longDescription = true;
    this.rootCause = true;
    this.workAround = true;
    this.resolution = true;
    this.routeCount = true;
    this.customNumber = true;
    this.userBrowser = true;
    this.userDevice = true;
    this.priority = true;
    this.publishedStatus = true;
    this.source = true;
  }
}

export default ProblemLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
