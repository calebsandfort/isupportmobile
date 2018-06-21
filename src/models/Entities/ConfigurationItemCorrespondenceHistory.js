//@flow
import EntityBase from './entityBase';

export class ConfigurationItemCorrespondenceHistory extends EntityBase {
  createdDate: string;
  entry: string;

  static fromApiEntity(apiConfigurationItemCorrespondenceHistory:ConfigurationItemCorrespondenceHistoryType): ConfigurationItemCorrespondenceHistory {
    let configurationItemCorrespondenceHistory = new ConfigurationItemCorrespondenceHistory();
    configurationItemCorrespondenceHistory.id = apiConfigurationItemCorrespondenceHistory.id;
    configurationItemCorrespondenceHistory.createdDate = apiConfigurationItemCorrespondenceHistory.createdDate;
    configurationItemCorrespondenceHistory.entry = apiConfigurationItemCorrespondenceHistory.entry;

    return configurationItemCorrespondenceHistory;
  }
}

export default ConfigurationItemCorrespondenceHistory;

export type ConfigurationItemCorrespondenceHistoryType = {
  id: number,
  createdDate: string;
  entry: string;
}

