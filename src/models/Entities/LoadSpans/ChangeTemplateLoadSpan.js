//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import UrgencyImpactMappingLoadSpan from './UrgencyImpactMappingLoadSpan';
import ChangeStatusLoadSpan from './ChangeStatusLoadSpan';
import CustomChangeTypeLoadSpan from './CustomChangeTypeLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';
import ChangeLayoutLoadSpan from './ChangeLayoutLoadSpan';

export class ChangeTemplateLoadSpan {
  name: boolean;
  reason: boolean;
  description: boolean;
  results: boolean;
  mySupportLockCategory: boolean;
  availableToReps: boolean;
  defaultScheduledImplementationInterval: boolean;
  defaultReviewInterval: boolean;
  defaultDueInterval: boolean;
  isWorkflowTemplate: boolean;
  header: boolean;
  footer: boolean;
  appendText: boolean;
  appendDescriptionFromParent: boolean;
  defaultMapping: UrgencyImpactMappingLoadSpan;
  defaultStatus: ChangeStatusLoadSpan;
  defaultChangeType: CustomChangeTypeLoadSpan;
  assignee: SupportRepresentativeLoadSpan;
  assigneeGroup: GroupLoadSpan;
  category: CategoryLoadSpan;
  mySupportDisplayChangeLayout: ChangeLayoutLoadSpan;
  mySupportSubmitChangeLayout: ChangeLayoutLoadSpan;

  constructor(){
    this.name = false;
    this.reason = false;
    this.description = false;
    this.results = false;
    this.mySupportLockCategory = false;
    this.availableToReps = false;
    this.defaultScheduledImplementationInterval = false;
    this.defaultReviewInterval = false;
    this.defaultDueInterval = false;
    this.isWorkflowTemplate = false;
    this.header = false;
    this.footer = false;
    this.appendText = false;
    this.appendDescriptionFromParent = false;
  }

  get defaultMappingLoadSpan(): UrgencyImpactMappingLoadSpan {
    if(!this.defaultMapping){
		this.defaultMapping = new UrgencyImpactMappingLoadSpan();
	}

    return this.defaultMapping;
  }

  get defaultStatusLoadSpan(): ChangeStatusLoadSpan {
    if(!this.defaultStatus){
		this.defaultStatus = new ChangeStatusLoadSpan();
	}

    return this.defaultStatus;
  }

  get defaultChangeTypeLoadSpan(): CustomChangeTypeLoadSpan {
    if(!this.defaultChangeType){
		this.defaultChangeType = new CustomChangeTypeLoadSpan();
	}

    return this.defaultChangeType;
  }

  get assigneeLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.assignee){
		this.assignee = new SupportRepresentativeLoadSpan();
	}

    return this.assignee;
  }

  get assigneeGroupLoadSpan(): GroupLoadSpan {
    if(!this.assigneeGroup){
		this.assigneeGroup = new GroupLoadSpan();
	}

    return this.assigneeGroup;
  }

  get categoryLoadSpan(): CategoryLoadSpan {
    if(!this.category){
		this.category = new CategoryLoadSpan();
	}

    return this.category;
  }

  get mySupportDisplayChangeLayoutLoadSpan(): ChangeLayoutLoadSpan {
    if(!this.mySupportDisplayChangeLayout){
		this.mySupportDisplayChangeLayout = new ChangeLayoutLoadSpan();
	}

    return this.mySupportDisplayChangeLayout;
  }

  get mySupportSubmitChangeLayoutLoadSpan(): ChangeLayoutLoadSpan {
    if(!this.mySupportSubmitChangeLayout){
		this.mySupportSubmitChangeLayout = new ChangeLayoutLoadSpan();
	}

    return this.mySupportSubmitChangeLayout;
  }

  loadAllProperties() {
    this.name = true;
    this.reason = true;
    this.description = true;
    this.results = true;
    this.mySupportLockCategory = true;
    this.availableToReps = true;
    this.defaultScheduledImplementationInterval = true;
    this.defaultReviewInterval = true;
    this.defaultDueInterval = true;
    this.isWorkflowTemplate = true;
    this.header = true;
    this.footer = true;
    this.appendText = true;
    this.appendDescriptionFromParent = true;
  }
}

export default ChangeTemplateLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
