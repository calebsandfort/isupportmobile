//@flow
import EntityBase from './entityBase';
import SupportRepresentative from './SupportRepresentative';
import Category from './Category';
import Group from './Group';
import ProblemStatus from './ProblemStatus';
import Incident from './Incident';
import Purchase from './Purchase';
import Impact from './Impact';
import Urgency from './Urgency';
import RuleGroup from './RuleGroup';
import {IncidentPriority} from './Enums';
import {ProblemPublishedStatus} from './Enums';
import {IncidentSource} from './Enums';

export class Problem extends EntityBase {
  guid: string;
  number: string;
  createdDate: string;
  modifiedDate: string;
  closedDate: string;
  shortDescription: string;
  longDescription: string;
  rootCause: string;
  workAround: string;
  resolution: string;
  routeCount: string;
  customNumber: string;
  userBrowser: string;
  userDevice: string;
  priority: IncidentPriority;
  publishedStatus: ProblemPublishedStatus;
  source: IncidentSource;
  assignee: SupportRepresentative;
  previousAssignee: SupportRepresentative;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  closedBy: SupportRepresentative;
  category: Category;
  group: Group;
  status: ProblemStatus;
  sourceIncident: Incident;
  sourcePurchase: Purchase;
  impact: Impact;
  urgency: Urgency;
  staticEffectiveRuleGroup: RuleGroup;

  static fromApiEntity(apiProblem:ProblemType): Problem {
    let problem = new Problem();
    problem.id = apiProblem.id;
    problem.guid = apiProblem.guid;
    problem.number = apiProblem.number;
    problem.createdDate = apiProblem.createdDate;
    problem.modifiedDate = apiProblem.modifiedDate;
    problem.closedDate = apiProblem.closedDate;
    problem.shortDescription = apiProblem.shortDescription;
    problem.longDescription = apiProblem.longDescription;
    problem.rootCause = apiProblem.rootCause;
    problem.workAround = apiProblem.workAround;
    problem.resolution = apiProblem.resolution;
    problem.routeCount = apiProblem.routeCount;
    problem.customNumber = apiProblem.customNumber;
    problem.userBrowser = apiProblem.userBrowser;
    problem.userDevice = apiProblem.userDevice;
    problem.priority = IncidentPriority.enumOrdinalOf(parseInt(apiProblem.priority, 10));
    problem.publishedStatus = ProblemPublishedStatus.enumOrdinalOf(parseInt(apiProblem.publishedStatus, 10));
    problem.source = IncidentSource.enumOrdinalOf(parseInt(apiProblem.source, 10));
    if (apiProblem.assignee) problem.assignee = SupportRepresentative.fromApiEntity(apiProblem.assignee);
    if (apiProblem.previousAssignee) problem.previousAssignee = SupportRepresentative.fromApiEntity(apiProblem.previousAssignee);
    if (apiProblem.author) problem.author = SupportRepresentative.fromApiEntity(apiProblem.author);
    if (apiProblem.modifiedBy) problem.modifiedBy = SupportRepresentative.fromApiEntity(apiProblem.modifiedBy);
    if (apiProblem.closedBy) problem.closedBy = SupportRepresentative.fromApiEntity(apiProblem.closedBy);
    if (apiProblem.category) problem.category = Category.fromApiEntity(apiProblem.category);
    if (apiProblem.group) problem.group = Group.fromApiEntity(apiProblem.group);
    if (apiProblem.status) problem.status = ProblemStatus.fromApiEntity(apiProblem.status);
    if (apiProblem.sourceIncident) problem.sourceIncident = Incident.fromApiEntity(apiProblem.sourceIncident);
    if (apiProblem.sourcePurchase) problem.sourcePurchase = Purchase.fromApiEntity(apiProblem.sourcePurchase);
    if (apiProblem.impact) problem.impact = Impact.fromApiEntity(apiProblem.impact);
    if (apiProblem.urgency) problem.urgency = Urgency.fromApiEntity(apiProblem.urgency);
    if (apiProblem.staticEffectiveRuleGroup) problem.staticEffectiveRuleGroup = RuleGroup.fromApiEntity(apiProblem.staticEffectiveRuleGroup);

    return problem;
  }
}

export default Problem;

export type ProblemType = {
  id: number,
  guid: string;
  number: string;
  createdDate: string;
  modifiedDate: string;
  closedDate: string;
  shortDescription: string;
  longDescription: string;
  rootCause: string;
  workAround: string;
  resolution: string;
  routeCount: string;
  customNumber: string;
  userBrowser: string;
  userDevice: string;
  priority: IncidentPriority;
  publishedStatus: ProblemPublishedStatus;
  source: IncidentSource;
  assignee: SupportRepresentative;
  previousAssignee: SupportRepresentative;
  author: SupportRepresentative;
  modifiedBy: SupportRepresentative;
  closedBy: SupportRepresentative;
  category: Category;
  group: Group;
  status: ProblemStatus;
  sourceIncident: Incident;
  sourcePurchase: Purchase;
  impact: Impact;
  urgency: Urgency;
  staticEffectiveRuleGroup: RuleGroup;
}

