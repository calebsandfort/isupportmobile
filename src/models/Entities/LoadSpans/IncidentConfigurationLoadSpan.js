//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import UrgencyImpactMappingLoadSpan from './UrgencyImpactMappingLoadSpan';
import IncidentStatusLoadSpan from './IncidentStatusLoadSpan';
import WorkHistoryTypeLoadSpan from './WorkHistoryTypeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class IncidentConfigurationLoadSpan extends LoadSpanBase {
  categoryEnabled: boolean;
  categoryDepth: boolean;
  approvalsEnabled: boolean;
  assignmentDefaultOwnerID: boolean;
  customerWorkHistoryEnabled: boolean;
  mappingEnabled: boolean;
  shortDescriptionEnabled: boolean;
  shortDescriptionRequired: boolean;
  workHistoryTypeFieldEnabled: boolean;
  workHistoryStartStopFieldsEnabled: boolean;
  defaultPriority: boolean;
  assignmentDefaultOwnerType: boolean;
  customerWorkHistoryPostMethod: boolean;
  defaultMapping: UrgencyImpactMappingLoadSpan;
  defaultIncidentStatus: IncidentStatusLoadSpan;
  defaultWorkHistoryType: WorkHistoryTypeLoadSpan;

  constructor(){
    super();
    this.categoryEnabled = false;
    this.categoryDepth = false;
    this.approvalsEnabled = false;
    this.assignmentDefaultOwnerID = false;
    this.customerWorkHistoryEnabled = false;
    this.mappingEnabled = false;
    this.shortDescriptionEnabled = false;
    this.shortDescriptionRequired = false;
    this.workHistoryTypeFieldEnabled = false;
    this.workHistoryStartStopFieldsEnabled = false;
    this.defaultPriority = false;
    this.assignmentDefaultOwnerType = false;
    this.customerWorkHistoryPostMethod = false;
  }

  get defaultMappingLoadSpan(): UrgencyImpactMappingLoadSpan {
    if(!this.defaultMapping){
		this.defaultMapping = new UrgencyImpactMappingLoadSpan();
	}

    return this.defaultMapping;
  }

  get defaultIncidentStatusLoadSpan(): IncidentStatusLoadSpan {
    if(!this.defaultIncidentStatus){
		this.defaultIncidentStatus = new IncidentStatusLoadSpan();
	}

    return this.defaultIncidentStatus;
  }

  get defaultWorkHistoryTypeLoadSpan(): WorkHistoryTypeLoadSpan {
    if(!this.defaultWorkHistoryType){
		this.defaultWorkHistoryType = new WorkHistoryTypeLoadSpan();
	}

    return this.defaultWorkHistoryType;
  }

  loadAllProperties() {
    this.categoryEnabled = true;
    this.categoryDepth = true;
    this.approvalsEnabled = true;
    this.assignmentDefaultOwnerID = true;
    this.customerWorkHistoryEnabled = true;
    this.mappingEnabled = true;
    this.shortDescriptionEnabled = true;
    this.shortDescriptionRequired = true;
    this.workHistoryTypeFieldEnabled = true;
    this.workHistoryStartStopFieldsEnabled = true;
    this.defaultPriority = true;
    this.assignmentDefaultOwnerType = true;
    this.customerWorkHistoryPostMethod = true;
  }
}

export default IncidentConfigurationLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
