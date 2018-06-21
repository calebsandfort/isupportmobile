/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import {Enum} from './enumify';

class RuleEvents extends Enum {}

RuleEvents.initEnum([
  ['InitialSave', 'Initially Saved', 1],
  ['InitialSaveByCustomer', 'Initially Saved by Customer', 2],
  ['WorkHistoryAdd', 'Work History Added', 4],
  ['CustomerWorkHistoryAdd', 'Customer Work History Added', 8],
  ['Routed', 'Routed', 16],
  ['InitialSaveFromEmail', 'Created via Email', 32],
  ['Closed', 'Closed', 64],
  ['Reopened', 'Reopened', 128],
  ['Acknowledged', 'Acknowledged', 256],
  ['ScheduledPendingWorkItemConverted', 'Scheduled Work Item Converted to Open', 512],
  ['ScheduledPendingWorkItemAssigned', 'Scheduled Work Item Generated (Not Yet Open)', 1024],
  ['ResultsRecorded', 'Results Recorded', 2048],
  ['ScheduledPendingWorkItemConvertedWarning', 'Scheduled Work Item Converted to Open Warning', 4096],
  ['RuleMet', 'Rule Met', 8192],
  ['ProfileUpdated', 'Profile Updated', 16384],
  ['PriorityChanged', 'Priority Changed', 32768],
  ['WorkaroundIdentified', 'Workaround Identified', 65536],
  ['PublishedToSocialClient', 'Published to mySupport', 131072],
  ['QuoteSent', 'Quote Sent', 262144],
  ['ExportedToQuickBooks', 'Exported to QuickBooks', 524288],
  ['InvoiceAdded', 'Invoice Added', 1048576],
  ['UpdatedViaEmail', 'Updated via Email', 2097152],
  ['CorrespondenceSent', 'Correspondence Sent', 4194304],
  ['UpdatedViaMySupport', 'Updated via mySupport', 8388608],
  ['NoRefIdFound', 'Email Does Not Contain iSupport Reference', 16777216],
  ['ItemsMarkedAsReceived', 'Items Marked as Received', 33554432],
  ['StatusChange', 'Status Change', 67108864],
  ['AllItemsMarkedAsReceived', 'All Items Marked as Received', 134217728],
  ['EditedDuringApprovals', 'Edited During Approvals', 268435456],
  ['SurveySent', 'Survey Sent', 536870912],
  ['SurveySubmitted', 'Survey Initially Submitted', 1073741824],
  ['SurveyClosed', 'Survey Closed', 2147483648],
  ['UpdatedViaMySupportChat', 'Updated via mySupport Chat', 4294967296],
  ['DiscussionPostAdded', 'Discussion Post Added', 8589934592],
]);

export default RuleEvents;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
