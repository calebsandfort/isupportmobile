//@flow
import EntityBase from './entityBase';

export class DeviceDetectionRule extends EntityBase {
  displayName: string;
  pattern: string;
  exactMatch: string;
  useReqularExpressions: string;
  parent: DeviceDetectionRule;

  static fromApiEntity(apiDeviceDetectionRule:DeviceDetectionRuleType): DeviceDetectionRule {
    let deviceDetectionRule = new DeviceDetectionRule();
    deviceDetectionRule.id = apiDeviceDetectionRule.id;
    deviceDetectionRule.displayName = apiDeviceDetectionRule.displayName;
    deviceDetectionRule.pattern = apiDeviceDetectionRule.pattern;
    deviceDetectionRule.exactMatch = apiDeviceDetectionRule.exactMatch;
    deviceDetectionRule.useReqularExpressions = apiDeviceDetectionRule.useReqularExpressions;
    if (apiDeviceDetectionRule.parent) deviceDetectionRule.parent = DeviceDetectionRule.fromApiEntity(apiDeviceDetectionRule.parent);

    return deviceDetectionRule;
  }
}

export default DeviceDetectionRule;

export type DeviceDetectionRuleType = {
  id: number,
  displayName: string;
  pattern: string;
  exactMatch: string;
  useReqularExpressions: string;
  parent: DeviceDetectionRule;
}

