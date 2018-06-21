//@flow
import EntityBase from './entityBase';

export class GlobalConfiguration extends EntityBase {
  techClientURLDatabaseValue: string;
  permissionsEnabled: string;
  useProblemManagementDatabaseValue: string;
  useChangeManagementDatabaseValue: string;

  static fromApiEntity(apiGlobalConfiguration:GlobalConfigurationType): GlobalConfiguration {
    let globalConfiguration = new GlobalConfiguration();
    globalConfiguration.id = apiGlobalConfiguration.id;
    globalConfiguration.techClientURLDatabaseValue = apiGlobalConfiguration.techClientURLDatabaseValue;
    globalConfiguration.permissionsEnabled = apiGlobalConfiguration.permissionsEnabled;
    globalConfiguration.useProblemManagementDatabaseValue = apiGlobalConfiguration.useProblemManagementDatabaseValue;
    globalConfiguration.useChangeManagementDatabaseValue = apiGlobalConfiguration.useChangeManagementDatabaseValue;

    return globalConfiguration;
  }
}

export default GlobalConfiguration;

export type GlobalConfigurationType = {
  id: number,
  techClientURLDatabaseValue: string;
  permissionsEnabled: string;
  useProblemManagementDatabaseValue: string;
  useChangeManagementDatabaseValue: string;
}

