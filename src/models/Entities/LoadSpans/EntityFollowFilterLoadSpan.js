//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import EntityFollowProfileLoadSpan from './EntityFollowProfileLoadSpan';

export class EntityFollowFilterLoadSpan {
  filterValue: boolean;
  helperValue1: boolean;
  helperValue2: boolean;
  lastNotifiedDate: boolean;
  followField: boolean;
  entityFollowProfile: EntityFollowProfileLoadSpan;

  constructor(){
    this.filterValue = false;
    this.helperValue1 = false;
    this.helperValue2 = false;
    this.lastNotifiedDate = false;
    this.followField = false;
  }

  get entityFollowProfileLoadSpan(): EntityFollowProfileLoadSpan {
    if(!this.entityFollowProfile){
		this.entityFollowProfile = new EntityFollowProfileLoadSpan();
	}

    return this.entityFollowProfile;
  }

  loadAllProperties() {
    this.filterValue = true;
    this.helperValue1 = true;
    this.helperValue2 = true;
    this.lastNotifiedDate = true;
    this.followField = true;
  }
}

export default EntityFollowFilterLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
