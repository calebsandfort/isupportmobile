//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import GroupLoadSpan from './GroupLoadSpan';
import WorkHistoryTypeLoadSpan from './WorkHistoryTypeLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class ProblemWorkHistoryLoadSpan extends LoadSpanBase {
  createdDate: boolean;
  entry: boolean;
  problemNumber: boolean;
  timeWorked: boolean;
  startDate: boolean;
  stopDate: boolean;
  owner: SupportRepresentativeLoadSpan;
  ownerGroup: GroupLoadSpan;
  workHistoryType: WorkHistoryTypeLoadSpan;

  constructor(){
    super();
    this.createdDate = false;
    this.entry = false;
    this.problemNumber = false;
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

  get ownerGroupLoadSpan(): GroupLoadSpan {
    if(!this.ownerGroup){
		this.ownerGroup = new GroupLoadSpan();
	}

    return this.ownerGroup;
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
    this.problemNumber = true;
    this.timeWorked = true;
    this.startDate = true;
    this.stopDate = true;
  }
}

export default ProblemWorkHistoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
