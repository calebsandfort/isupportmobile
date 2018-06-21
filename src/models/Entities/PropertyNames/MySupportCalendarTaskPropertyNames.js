//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import PropertyNamesBase from './PropertyNamesBase';
import MySupportCalendarPropertyNames from './MySupportCalendarPropertyNames';

class MySupportCalendarTaskPropertyNames extends PropertyNamesBase {
  constructor(owner: ?string){
    super(owner);
  }

  get identifier (): string {
    return super.resolvePropertyName("Identifier");
  }

  get title (): string {
    return super.resolvePropertyName("Title");
  }
  get description (): string {
    return super.resolvePropertyName("Description");
  }
  get start (): string {
    return super.resolvePropertyName("Start");
  }
  get end (): string {
    return super.resolvePropertyName("End");
  }
  get isAllDay (): string {
    return super.resolvePropertyName("IsAllDay");
  }
  get recurrenceID (): string {
    return super.resolvePropertyName("RecurrenceID");
  }
  get recurrenceRule (): string {
    return super.resolvePropertyName("RecurrenceRule");
  }
  get recurrenceException (): string {
    return super.resolvePropertyName("RecurrenceException");
  }
  get isRsvp (): string {
    return super.resolvePropertyName("IsRsvp");
  }
  get maxAttendees (): string {
    return super.resolvePropertyName("MaxAttendees");
  }
  get calendar (): MySupportCalendarPropertyNames {
    return new MySupportCalendarPropertyNames(super.resolvePropertyName("Calendar"));
  }
}

export default MySupportCalendarTaskPropertyNames;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
