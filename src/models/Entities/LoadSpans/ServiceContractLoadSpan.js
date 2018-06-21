//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import ServiceContractStatusLoadSpan from './ServiceContractStatusLoadSpan';

export class ServiceContractLoadSpan {
  guid: boolean;
  number: boolean;
  customNumber: boolean;
  comments: boolean;
  usedCount: boolean;
  durationCount: boolean;
  durationStart: boolean;
  durationEnd: boolean;
  name: boolean;
  createdDate: boolean;
  contractType: boolean;
  durationCountType: boolean;
  status: ServiceContractStatusLoadSpan;

  constructor(){
    this.guid = false;
    this.number = false;
    this.customNumber = false;
    this.comments = false;
    this.usedCount = false;
    this.durationCount = false;
    this.durationStart = false;
    this.durationEnd = false;
    this.name = false;
    this.createdDate = false;
    this.contractType = false;
    this.durationCountType = false;
  }

  get statusLoadSpan(): ServiceContractStatusLoadSpan {
    if(!this.status){
		this.status = new ServiceContractStatusLoadSpan();
	}

    return this.status;
  }

  loadAllProperties() {
    this.guid = true;
    this.number = true;
    this.customNumber = true;
    this.comments = true;
    this.usedCount = true;
    this.durationCount = true;
    this.durationStart = true;
    this.durationEnd = true;
    this.name = true;
    this.createdDate = true;
    this.contractType = true;
    this.durationCountType = true;
  }
}

export default ServiceContractLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
