//@flow
import EntityBase from './entityBase';

export class CustomNumberDefinition extends EntityBase {
  enable: string;
  autoGenerate: string;
  requireOnSave: string;
  readOnlyOnceSaved: string;
  customLabel: string;

  static fromApiEntity(apiCustomNumberDefinition:CustomNumberDefinitionType): CustomNumberDefinition {
    let customNumberDefinition = new CustomNumberDefinition();
    customNumberDefinition.id = apiCustomNumberDefinition.id;
    customNumberDefinition.enable = apiCustomNumberDefinition.enable;
    customNumberDefinition.autoGenerate = apiCustomNumberDefinition.autoGenerate;
    customNumberDefinition.requireOnSave = apiCustomNumberDefinition.requireOnSave;
    customNumberDefinition.readOnlyOnceSaved = apiCustomNumberDefinition.readOnlyOnceSaved;
    customNumberDefinition.customLabel = apiCustomNumberDefinition.customLabel;

    return customNumberDefinition;
  }
}

export default CustomNumberDefinition;

export type CustomNumberDefinitionType = {
  id: number,
  enable: string;
  autoGenerate: string;
  requireOnSave: string;
  readOnlyOnceSaved: string;
  customLabel: string;
}

