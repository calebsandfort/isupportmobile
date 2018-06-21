//@flow
import EntityBase from './entityBase';
import MySupportCalendar from './MySupportCalendar';

export class MySupportCalendarTask extends EntityBase {
  title: string;
  description: string;
  start: string;
  end: string;
  isAllDay: string;
  recurrenceID: string;
  recurrenceRule: string;
  recurrenceException: string;
  isRsvp: string;
  maxAttendees: string;
  calendar: MySupportCalendar;

  static fromApiEntity(apiMySupportCalendarTask:MySupportCalendarTaskType): MySupportCalendarTask {
    let mySupportCalendarTask = new MySupportCalendarTask();
    mySupportCalendarTask.id = apiMySupportCalendarTask.id;
    mySupportCalendarTask.title = apiMySupportCalendarTask.title;
    mySupportCalendarTask.description = apiMySupportCalendarTask.description;
    mySupportCalendarTask.start = apiMySupportCalendarTask.start;
    mySupportCalendarTask.end = apiMySupportCalendarTask.end;
    mySupportCalendarTask.isAllDay = apiMySupportCalendarTask.isAllDay;
    mySupportCalendarTask.recurrenceID = apiMySupportCalendarTask.recurrenceID;
    mySupportCalendarTask.recurrenceRule = apiMySupportCalendarTask.recurrenceRule;
    mySupportCalendarTask.recurrenceException = apiMySupportCalendarTask.recurrenceException;
    mySupportCalendarTask.isRsvp = apiMySupportCalendarTask.isRsvp;
    mySupportCalendarTask.maxAttendees = apiMySupportCalendarTask.maxAttendees;
    if (apiMySupportCalendarTask.calendar) mySupportCalendarTask.calendar = MySupportCalendar.fromApiEntity(apiMySupportCalendarTask.calendar);

    return mySupportCalendarTask;
  }
}

export default MySupportCalendarTask;

export type MySupportCalendarTaskType = {
  id: number,
  title: string;
  description: string;
  start: string;
  end: string;
  isAllDay: string;
  recurrenceID: string;
  recurrenceRule: string;
  recurrenceException: string;
  isRsvp: string;
  maxAttendees: string;
  calendar: MySupportCalendar;
}

