//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import IncidentStatusLoadSpan from './IncidentStatusLoadSpan';
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import CategoryLoadSpan from './CategoryLoadSpan';
import UrgencyImpactMappingLoadSpan from './UrgencyImpactMappingLoadSpan';
import IncidentLayoutLoadSpan from './IncidentLayoutLoadSpan';
import WorkHistoryTypeLoadSpan from './WorkHistoryTypeLoadSpan';

export class IncidentTemplateLoadSpan {
  name: boolean;
  issueDescription: boolean;
  issueResolution: boolean;
  daysToFollowup: boolean;
  followupEnabled: boolean;
  mySupportLockCategory: boolean;
  availableToReps: boolean;
  autoClose: boolean;
  autoRecordTime: boolean;
  timeWorkedHours: boolean;
  timeWorkedMinutes: boolean;
  shortDescription: boolean;
  header: boolean;
  footer: boolean;
  appendText: boolean;
  appendDescriptionFromParent: boolean;
  priority: boolean;
  openStatus: IncidentStatusLoadSpan;
  closedStatus: IncidentStatusLoadSpan;
  assignee: SupportRepresentativeLoadSpan;
  assigneeGroup: GroupLoadSpan;
  customer: CustomerLoadSpan;
  category: CategoryLoadSpan;
  defaultMapping: UrgencyImpactMappingLoadSpan;
  mySupportDisplayIncidentLayout: IncidentLayoutLoadSpan;
  mySupportSubmitIncidentLayout: IncidentLayoutLoadSpan;
  workHistoryType: WorkHistoryTypeLoadSpan;

  constructor(){
    this.name = false;
    this.issueDescription = false;
    this.issueResolution = false;
    this.daysToFollowup = false;
    this.followupEnabled = false;
    this.mySupportLockCategory = false;
    this.availableToReps = false;
    this.autoClose = false;
    this.autoRecordTime = false;
    this.timeWorkedHours = false;
    this.timeWorkedMinutes = false;
    this.shortDescription = false;
    this.header = false;
    this.footer = false;
    this.appendText = false;
    this.appendDescriptionFromParent = false;
    this.priority = false;
  }

  get openStatusLoadSpan(): IncidentStatusLoadSpan {
    if(!this.openStatus){
		this.openStatus = new IncidentStatusLoadSpan();
	}

    return this.openStatus;
  }

  get closedStatusLoadSpan(): IncidentStatusLoadSpan {
    if(!this.closedStatus){
		this.closedStatus = new IncidentStatusLoadSpan();
	}

    return this.closedStatus;
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

  get customerLoadSpan(): CustomerLoadSpan {
    if(!this.customer){
		this.customer = new CustomerLoadSpan();
	}

    return this.customer;
  }

  get categoryLoadSpan(): CategoryLoadSpan {
    if(!this.category){
		this.category = new CategoryLoadSpan();
	}

    return this.category;
  }

  get defaultMappingLoadSpan(): UrgencyImpactMappingLoadSpan {
    if(!this.defaultMapping){
		this.defaultMapping = new UrgencyImpactMappingLoadSpan();
	}

    return this.defaultMapping;
  }

  get mySupportDisplayIncidentLayoutLoadSpan(): IncidentLayoutLoadSpan {
    if(!this.mySupportDisplayIncidentLayout){
		this.mySupportDisplayIncidentLayout = new IncidentLayoutLoadSpan();
	}

    return this.mySupportDisplayIncidentLayout;
  }

  get mySupportSubmitIncidentLayoutLoadSpan(): IncidentLayoutLoadSpan {
    if(!this.mySupportSubmitIncidentLayout){
		this.mySupportSubmitIncidentLayout = new IncidentLayoutLoadSpan();
	}

    return this.mySupportSubmitIncidentLayout;
  }

  get workHistoryTypeLoadSpan(): WorkHistoryTypeLoadSpan {
    if(!this.workHistoryType){
		this.workHistoryType = new WorkHistoryTypeLoadSpan();
	}

    return this.workHistoryType;
  }

  loadAllProperties() {
    this.name = true;
    this.issueDescription = true;
    this.issueResolution = true;
    this.daysToFollowup = true;
    this.followupEnabled = true;
    this.mySupportLockCategory = true;
    this.availableToReps = true;
    this.autoClose = true;
    this.autoRecordTime = true;
    this.timeWorkedHours = true;
    this.timeWorkedMinutes = true;
    this.shortDescription = true;
    this.header = true;
    this.footer = true;
    this.appendText = true;
    this.appendDescriptionFromParent = true;
    this.priority = true;
  }
}

export default IncidentTemplateLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
