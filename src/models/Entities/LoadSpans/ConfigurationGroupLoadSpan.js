//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import GlobalConfigurationLoadSpan from './GlobalConfigurationLoadSpan';
import AssetConfigurationLoadSpan from './AssetConfigurationLoadSpan';
import IncidentConfigurationLoadSpan from './IncidentConfigurationLoadSpan';
import ProblemConfigurationLoadSpan from './ProblemConfigurationLoadSpan';
import ChangeConfigurationLoadSpan from './ChangeConfigurationLoadSpan';

export class ConfigurationGroupLoadSpan {
  globalConfiguration: GlobalConfigurationLoadSpan;
  assetConfiguration: AssetConfigurationLoadSpan;
  incidentConfiguration: IncidentConfigurationLoadSpan;
  problemConfiguration: ProblemConfigurationLoadSpan;
  changeConfiguration: ChangeConfigurationLoadSpan;

  constructor(){
  }

  get globalConfigurationLoadSpan(): GlobalConfigurationLoadSpan {
    if(!this.globalConfiguration){
		this.globalConfiguration = new GlobalConfigurationLoadSpan();
	}

    return this.globalConfiguration;
  }

  get assetConfigurationLoadSpan(): AssetConfigurationLoadSpan {
    if(!this.assetConfiguration){
		this.assetConfiguration = new AssetConfigurationLoadSpan();
	}

    return this.assetConfiguration;
  }

  get incidentConfigurationLoadSpan(): IncidentConfigurationLoadSpan {
    if(!this.incidentConfiguration){
		this.incidentConfiguration = new IncidentConfigurationLoadSpan();
	}

    return this.incidentConfiguration;
  }

  get problemConfigurationLoadSpan(): ProblemConfigurationLoadSpan {
    if(!this.problemConfiguration){
		this.problemConfiguration = new ProblemConfigurationLoadSpan();
	}

    return this.problemConfiguration;
  }

  get changeConfigurationLoadSpan(): ChangeConfigurationLoadSpan {
    if(!this.changeConfiguration){
		this.changeConfiguration = new ChangeConfigurationLoadSpan();
	}

    return this.changeConfiguration;
  }

  loadAllProperties() {
  }
}

export default ConfigurationGroupLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
