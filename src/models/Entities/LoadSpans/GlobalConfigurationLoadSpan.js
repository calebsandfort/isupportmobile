//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import LoadSpanBase from './LoadSpanBase';

export class GlobalConfigurationLoadSpan extends LoadSpanBase {
  techClientURLDatabaseValue: boolean;
  permissionsEnabled: boolean;
  useProblemManagementDatabaseValue: boolean;
  useChangeManagementDatabaseValue: boolean;

  constructor(){
    super();
    this.techClientURLDatabaseValue = false;
    this.permissionsEnabled = false;
    this.useProblemManagementDatabaseValue = false;
    this.useChangeManagementDatabaseValue = false;
  }

  loadAllProperties() {
    this.techClientURLDatabaseValue = true;
    this.permissionsEnabled = true;
    this.useProblemManagementDatabaseValue = true;
    this.useChangeManagementDatabaseValue = true;
  }
}

export default GlobalConfigurationLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
