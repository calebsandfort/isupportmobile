//@flow
import EntityBase from './entityBase';
import {ConfigurationItemTypeOptionalFields} from './Enums';

export class ConfigurationItemType extends EntityBase {
  name: string;
  optionalFields: ConfigurationItemTypeOptionalFields;

  static fromApiEntity(apiConfigurationItemType:ConfigurationItemTypeType): ConfigurationItemType {
    let configurationItemType = new ConfigurationItemType();
    configurationItemType.id = apiConfigurationItemType.id;
    configurationItemType.name = apiConfigurationItemType.name;
    configurationItemType.optionalFields = ConfigurationItemTypeOptionalFields.enumOrdinalOf(parseInt(apiConfigurationItemType.optionalFields, 10));

    return configurationItemType;
  }
}

export default ConfigurationItemType;

export type ConfigurationItemTypeType = {
  id: number,
  name: string;
  optionalFields: ConfigurationItemTypeOptionalFields;
}

