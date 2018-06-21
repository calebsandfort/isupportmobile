//@flow
import EntityBase from './entityBase';
import {ApprovalCycleNotificationOrderType} from './Enums';

export class ApprovalCycle extends EntityBase {
  name: string;
  description: string;
  numberOfVerdictsToApprove: string;
  numberOfVerdictsToDecline: string;
  notificationOrderType: ApprovalCycleNotificationOrderType;

  static fromApiEntity(apiApprovalCycle:ApprovalCycleType): ApprovalCycle {
    let approvalCycle = new ApprovalCycle();
    approvalCycle.id = apiApprovalCycle.id;
    approvalCycle.name = apiApprovalCycle.name;
    approvalCycle.description = apiApprovalCycle.description;
    approvalCycle.numberOfVerdictsToApprove = apiApprovalCycle.numberOfVerdictsToApprove;
    approvalCycle.numberOfVerdictsToDecline = apiApprovalCycle.numberOfVerdictsToDecline;
    approvalCycle.notificationOrderType = ApprovalCycleNotificationOrderType.enumOrdinalOf(parseInt(apiApprovalCycle.notificationOrderType, 10));

    return approvalCycle;
  }
}

export default ApprovalCycle;

export type ApprovalCycleType = {
  id: number,
  name: string;
  description: string;
  numberOfVerdictsToApprove: string;
  numberOfVerdictsToDecline: string;
  notificationOrderType: ApprovalCycleNotificationOrderType;
}

