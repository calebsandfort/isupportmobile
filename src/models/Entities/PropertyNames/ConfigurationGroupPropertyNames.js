//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import GlobalConfigurationPropertyNames from './GlobalConfigurationPropertyNames';
import AssetConfigurationPropertyNames from './AssetConfigurationPropertyNames';
import IncidentConfigurationPropertyNames from './IncidentConfigurationPropertyNames';
import ProblemConfigurationPropertyNames from './ProblemConfigurationPropertyNames';
import ChangeConfigurationPropertyNames from './ChangeConfigurationPropertyNames';

class ConfigurationGroupPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get globalConfiguration (): GlobalConfigurationPropertyNames {
    return new GlobalConfigurationPropertyNames(super.resolvePropertyName("GlobalConfiguration"));
  }
  get assetConfiguration (): AssetConfigurationPropertyNames {
    return new AssetConfigurationPropertyNames(super.resolvePropertyName("AssetConfiguration"));
  }
  get incidentConfiguration (): IncidentConfigurationPropertyNames {
    return new IncidentConfigurationPropertyNames(super.resolvePropertyName("IncidentConfiguration"));
  }
  get problemConfiguration (): ProblemConfigurationPropertyNames {
    return new ProblemConfigurationPropertyNames(super.resolvePropertyName("ProblemConfiguration"));
  }
  get changeConfiguration (): ChangeConfigurationPropertyNames {
    return new ChangeConfigurationPropertyNames(super.resolvePropertyName("ChangeConfiguration"));
  }
}

export default ConfigurationGroupPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
