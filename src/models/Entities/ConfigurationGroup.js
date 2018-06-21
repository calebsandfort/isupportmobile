//@flow
import EntityBase from './entityBase';
import GlobalConfiguration from './GlobalConfiguration';
import AssetConfiguration from './AssetConfiguration';
import IncidentConfiguration from './IncidentConfiguration';
import ProblemConfiguration from './ProblemConfiguration';
import ChangeConfiguration from './ChangeConfiguration';

export class ConfigurationGroup extends EntityBase {
  globalConfiguration: GlobalConfiguration;
  assetConfiguration: AssetConfiguration;
  incidentConfiguration: IncidentConfiguration;
  problemConfiguration: ProblemConfiguration;
  changeConfiguration: ChangeConfiguration;

  static fromApiEntity(apiConfigurationGroup:ConfigurationGroupType): ConfigurationGroup {
    let configurationGroup = new ConfigurationGroup();
    configurationGroup.id = apiConfigurationGroup.id;
    if (apiConfigurationGroup.globalConfiguration) configurationGroup.globalConfiguration = GlobalConfiguration.fromApiEntity(apiConfigurationGroup.globalConfiguration);
    if (apiConfigurationGroup.assetConfiguration) configurationGroup.assetConfiguration = AssetConfiguration.fromApiEntity(apiConfigurationGroup.assetConfiguration);
    if (apiConfigurationGroup.incidentConfiguration) configurationGroup.incidentConfiguration = IncidentConfiguration.fromApiEntity(apiConfigurationGroup.incidentConfiguration);
    if (apiConfigurationGroup.problemConfiguration) configurationGroup.problemConfiguration = ProblemConfiguration.fromApiEntity(apiConfigurationGroup.problemConfiguration);
    if (apiConfigurationGroup.changeConfiguration) configurationGroup.changeConfiguration = ChangeConfiguration.fromApiEntity(apiConfigurationGroup.changeConfiguration);

    return configurationGroup;
  }
}

export default ConfigurationGroup;

export type ConfigurationGroupType = {
  id: number,
  globalConfiguration: GlobalConfiguration;
  assetConfiguration: AssetConfiguration;
  incidentConfiguration: IncidentConfiguration;
  problemConfiguration: ProblemConfiguration;
  changeConfiguration: ChangeConfiguration;
}

