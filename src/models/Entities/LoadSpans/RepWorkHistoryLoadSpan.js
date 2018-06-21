//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import WorkHistoryTypeLoadSpan from './WorkHistoryTypeLoadSpan';

export class RepWorkHistoryLoadSpan {
  createdDate: boolean;
  entry: boolean;
  incidentNumber: boolean;
  timeWorked: boolean;
  startDate: boolean;
  stopDate: boolean;
  owner: SupportRepresentativeLoadSpan;
  workHistoryType: WorkHistoryTypeLoadSpan;

  constructor(){
    this.createdDate = false;
    this.entry = false;
    this.incidentNumber = false;
    this.timeWorked = false;
    this.startDate = false;
    this.stopDate = false;
  }

  get ownerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.owner){
		this.owner = new SupportRepresentativeLoadSpan();
	}

    return this.owner;
  }

  get workHistoryTypeLoadSpan(): WorkHistoryTypeLoadSpan {
    if(!this.workHistoryType){
		this.workHistoryType = new WorkHistoryTypeLoadSpan();
	}

    return this.workHistoryType;
  }

  loadAllProperties() {
    this.createdDate = true;
    this.entry = true;
    this.incidentNumber = true;
    this.timeWorked = true;
    this.startDate = true;
    this.stopDate = true;
  }
}

export default RepWorkHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
