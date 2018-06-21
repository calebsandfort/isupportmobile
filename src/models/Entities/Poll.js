//@flow
import EntityBase from './entityBase';

export class Poll extends EntityBase {
  dummy: string;

  static fromApiEntity(apiPoll:PollType): Poll {
    let poll = new Poll();
    poll.id = apiPoll.id;
    poll.dummy = apiPoll.dummy;

    return poll;
  }
}

export default Poll;

export type PollType = {
  id: number,
  dummy: string;
}

