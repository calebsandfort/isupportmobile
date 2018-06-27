//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import UrgencyImpactMappingLoadSpan from './UrgencyImpactMappingLoadSpan';
import ProblemStatusLoadSpan from './ProblemStatusLoadSpan';
import IncidentStatusLoadSpan from './IncidentStatusLoadSpan';
import WorkHistoryTypeLoadSpan from './WorkHistoryTypeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ProblemConfigurationLoadSpan extends LoadSpanBase {
  setAssigneeAsAuthor: boolean;
  workHistoryTimeRequired: boolean;
  workHistoryTypeFieldEnabled: boolean;
  workHistoryStartStopFieldsEnabled: boolean;
  defaultAssignee: SupportRepresentativeLoadSpan;
  defaultMapping: UrgencyImpactMappingLoadSpan;
  defaultStatus: ProblemStatusLoadSpan;
  incidentClosureStatus: IncidentStatusLoadSpan;
  defaultWorkHistoryType: WorkHistoryTypeLoadSpan;

  constructor(){
    super();
    this.setAssigneeAsAuthor = false;
    this.workHistoryTimeRequired = false;
    this.workHistoryTypeFieldEnabled = false;
    this.workHistoryStartStopFieldsEnabled = false;
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

  get defaultStatusLoadSpan(): ProblemStatusLoadSpan {
    if(!this.defaultStatus){
		this.defaultStatus = new ProblemStatusLoadSpan();
	}

    return this.defaultStatus;
  }

  get incidentClosureStatusLoadSpan(): IncidentStatusLoadSpan {
    if(!this.incidentClosureStatus){
		this.incidentClosureStatus = new IncidentStatusLoadSpan();
	}

    return this.incidentClosureStatus;
  }

  get defaultWorkHistoryTypeLoadSpan(): WorkHistoryTypeLoadSpan {
    if(!this.defaultWorkHistoryType){
		this.defaultWorkHistoryType = new WorkHistoryTypeLoadSpan();
	}

    return this.defaultWorkHistoryType;
  }

  loadAllProperties() {
    this.setAssigneeAsAuthor = true;
    this.workHistoryTimeRequired = true;
    this.workHistoryTypeFieldEnabled = true;
    this.workHistoryStartStopFieldsEnabled = true;
  }
}

export default ProblemConfigurationLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
