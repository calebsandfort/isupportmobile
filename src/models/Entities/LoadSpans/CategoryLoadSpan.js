//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class CategoryLoadSpan extends LoadSpanBase {
  entry: boolean;
  level: boolean;
  hasChildren: boolean;
  availableToCustomers: boolean;
  image: boolean;
  parent: CategoryLoadSpan;

  constructor(){
    super();
    this.entry = false;
    this.level = false;
    this.hasChildren = false;
    this.availableToCustomers = false;
    this.image = false;
  }

  get parentLoadSpan(): CategoryLoadSpan {
    if(!this.parent){
		this.parent = new CategoryLoadSpan();
	}

    return this.parent;
  }

  loadAllProperties() {
    this.entry = true;
    this.level = true;
    this.hasChildren = true;
    this.availableToCustomers = true;
    this.image = true;
  }
}

export default CategoryLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
