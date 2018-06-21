//@flow
import EntityBase from './entityBase';

export class RuleGroup extends EntityBase {
  name: string;

  static fromApiEntity(apiRuleGroup:RuleGroupType): RuleGroup {
    let ruleGroup = new RuleGroup();
    ruleGroup.id = apiRuleGroup.id;
    ruleGroup.name = apiRuleGroup.name;

    return ruleGroup;
  }
}

export default RuleGroup;

export type RuleGroupType = {
  id: number,
  name: string;
}

