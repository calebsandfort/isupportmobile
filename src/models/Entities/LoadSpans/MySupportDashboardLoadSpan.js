//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import SupportRepresentativeLoadSpan from './SupportRepresentativeLoadSpan';
import CustomerLoadSpan from './CustomerLoadSpan';
import TutorialLoadSpan from './TutorialLoadSpan';

export class MySupportDashboardLoadSpan {
  name: boolean;
  description: boolean;
  json: boolean;
  repOwner: SupportRepresentativeLoadSpan;
  customerOwner: CustomerLoadSpan;
  tutorial: TutorialLoadSpan;

  constructor(){
    this.name = false;
    this.description = false;
    this.json = false;
  }

  get repOwnerLoadSpan(): SupportRepresentativeLoadSpan {
    if(!this.repOwner){
		this.repOwner = new SupportRepresentativeLoadSpan();
	}

    return this.repOwner;
  }

  get customerOwnerLoadSpan(): CustomerLoadSpan {
    if(!this.customerOwner){
		this.customerOwner = new CustomerLoadSpan();
	}

    return this.customerOwner;
  }

  get tutorialLoadSpan(): TutorialLoadSpan {
    if(!this.tutorial){
		this.tutorial = new TutorialLoadSpan();
	}

    return this.tutorial;
  }

  loadAllProperties() {
    this.name = true;
    this.description = true;
    this.json = true;
  }
}

export default MySupportDashboardLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
