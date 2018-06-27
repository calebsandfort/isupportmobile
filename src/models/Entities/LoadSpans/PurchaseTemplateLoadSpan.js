//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PurchaseStatusLoadSpan from './PurchaseStatusLoadSpan';
import CostCenterLoadSpan from './CostCenterLoadSpan';
import JobFunctionLoadSpan from './JobFunctionLoadSpan';

import LoadSpanBase from './LoadSpanBase';

export class PurchaseTemplateLoadSpan extends LoadSpanBase {
  name: boolean;
  shortDescription: boolean;
  comments: boolean;
  header: boolean;
  footer: boolean;
  defaultStatus: PurchaseStatusLoadSpan;
  costCenter: CostCenterLoadSpan;
  jobFunction: JobFunctionLoadSpan;

  constructor(){
    super();
    this.name = false;
    this.shortDescription = false;
    this.comments = false;
    this.header = false;
    this.footer = false;
  }

  get defaultStatusLoadSpan(): PurchaseStatusLoadSpan {
    if(!this.defaultStatus){
		this.defaultStatus = new PurchaseStatusLoadSpan();
	}

    return this.defaultStatus;
  }

  get costCenterLoadSpan(): CostCenterLoadSpan {
    if(!this.costCenter){
		this.costCenter = new CostCenterLoadSpan();
	}

    return this.costCenter;
  }

  get jobFunctionLoadSpan(): JobFunctionLoadSpan {
    if(!this.jobFunction){
		this.jobFunction = new JobFunctionLoadSpan();
	}

    return this.jobFunction;
  }

  loadAllProperties() {
    this.name = true;
    this.shortDescription = true;
    this.comments = true;
    this.header = true;
    this.footer = true;
  }
}

export default PurchaseTemplateLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
