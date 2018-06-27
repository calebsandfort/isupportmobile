//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import UrgencyImpactMappingLoadSpan from './UrgencyImpactMappingLoadSpan';
import ChangeStatusLoadSpan from './ChangeStatusLoadSpan';
import CustomChangeTypeLoadSpan from './CustomChangeTypeLoadSpan';
import WorkHistoryTypeLoadSpan from './WorkHistoryTypeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ChangeConfigurationLoadSpan extends LoadSpanBase {
  includeCustomerWorkHistory: boolean;
  defaultScheduledImplementationInterval: boolean;
  defaultReviewInterval: boolean;
  defaultDueInterval: boolean;
  setAssigneeAsAuthor: boolean;
  workHistoryTimeRequired: boolean;
  workHistoryStartStopFieldsEnabled: boolean;
  includeWorkHistoryNotes: boolean;
  defaultAssignee: SupportRepresentativeLoadSpan;
  defaultMapping: UrgencyImpactMappingLoadSpan;
  defaultStatus: ChangeStatusLoadSpan;
  defaultChangeType: CustomChangeTypeLoadSpan;
  defaultWorkHistoryType: WorkHistoryTypeLoadSpan;

  constructor(){
    super();
    this.includeCustomerWorkHistory = false;
    this.defaultScheduledImplementationInterval = false;
    this.defaultReviewInterval = false;
    this.defaultDueInterval = false;
    this.setAssigneeAsAuthor = false;
    this.workHistoryTimeRequired = false;
    this.workHistoryStartStopFieldsEnabled = false;
    this.includeWorkHistoryNotes = false;
  }

  get defaultAssigneeLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.defaultAssignee){
		this.defaultAssignee = new SupportRepresentativeLoadSpan();
	}

    return this.defaultAssignee;
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

  get defaultWorkHistoryTypeLoadSpan(): WorkHistoryTypeLoadSpan {
    if(!this.defaultWorkHistoryType){
		this.defaultWorkHistoryType = new WorkHistoryTypeLoadSpan();
	}

    return this.defaultWorkHistoryType;
  }

  loadAllProperties() {
    this.includeCustomerWorkHistory = true;
    this.defaultScheduledImplementationInterval = true;
    this.defaultReviewInterval = true;
    this.defaultDueInterval = true;
    this.setAssigneeAsAuthor = true;
    this.workHistoryTimeRequired = true;
    this.workHistoryStartStopFieldsEnabled = true;
    this.includeWorkHistoryNotes = true;
  }
}

export default ChangeConfigurationLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
