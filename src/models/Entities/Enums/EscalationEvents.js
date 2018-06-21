/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/

import {Enum} from './enumify';

class EscalationEvents extends Enum {}

EscalationEvents.initEnum([
  ['Warning', 'Warning', 1],
  ['Low', 'Low Priority', 2],
  ['Medium', 'Medium Priority', 4],
  ['High', 'High Priority', 8],
  ['Emergency', 'Emergency Priority', 16],
  ['FirstAutoRoute', 'Reassignment 1', 32],
  ['SecondAutoRoute', 'Reassignment 2', 64],
  ['ThirdAutoRoute', 'Reassignment 3', 128],
  ['FourthAutoRoute', 'Reassignment 4', 256],
  ['Closure', 'Closure', 512],
  ['Upgrade', 'Upgrade', 1024],
  ['Closed', 'Closed', 2048],
  ['Reopened', 'Reopened', 4096],
  ['DefinitionChanged', 'Definition Changed', 8192],
  ['CustomerSlaChanged', 'Customer Sla Changed', 16384],
  ['CompanySlaChanged', 'Company Sla Changed', 32678],
  ['CategorySlaChanged', 'Category Sla Changed', 65536],
  ['SlaWinnerChanged', 'Sla Winner Changed', 131072],
  ['TemplateSlaChanged', 'Template Sla Changed', 262144],
  ['CustomerCompanyChanged', 'Customer\'s Company Sla Changed', 524288],
  ['Acknowledgment', 'Acknowledgment', 1048576],
  ['AcknowledgmentDisabled', 'Acknowledgment Disabled', 2097152],
  ['HoursOfOperationChanged', 'Hours of Operation Changed', 4194304],
]);

export default EscalationEvents;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
