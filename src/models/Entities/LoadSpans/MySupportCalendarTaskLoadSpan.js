//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import MySupportCalendarLoadSpan from './MySupportCalendarLoadSpan';

export class MySupportCalendarTaskLoadSpan {
  title: boolean;
  description: boolean;
  start: boolean;
  end: boolean;
  isAllDay: boolean;
  recurrenceID: boolean;
  recurrenceRule: boolean;
  recurrenceException: boolean;
  isRsvp: boolean;
  maxAttendees: boolean;
  calendar: MySupportCalendarLoadSpan;

  constructor(){
    this.title = false;
    this.description = false;
    this.start = false;
    this.end = false;
    this.isAllDay = false;
    this.recurrenceID = false;
    this.recurrenceRule = false;
    this.recurrenceException = false;
    this.isRsvp = false;
    this.maxAttendees = false;
  }

  get calendarLoadSpan(): MySupportCalendarLoadSpan {
    if(!this.calendar){
		this.calendar = new MySupportCalendarLoadSpan();
	}

    return this.calendar;
  }

  loadAllProperties() {
    this.title = true;
    this.description = true;
    this.start = true;
    this.end = true;
    this.isAllDay = true;
    this.recurrenceID = true;
    this.recurrenceRule = true;
    this.recurrenceException = true;
    this.isRsvp = true;
    this.maxAttendees = true;
  }
}

export default MySupportCalendarTaskLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
