//@flow
import EntityBase from './entityBase';
import PollAnswer from './PollAnswer';
import Customer from './Customer';
import SupportRepresentative from './SupportRepresentative';

export class PollVote extends EntityBase {
  date: string;
  answer: PollAnswer;
  customer: Customer;
  rep: SupportRepresentative;

  static fromApiEntity(apiPollVote:PollVoteType): PollVote {
    let pollVote = new PollVote();
    pollVote.id = apiPollVote.id;
    pollVote.date = apiPollVote.date;
    if (apiPollVote.answer) pollVote.answer = PollAnswer.fromApiEntity(apiPollVote.answer);
    if (apiPollVote.customer) pollVote.customer = Customer.fromApiEntity(apiPollVote.customer);
    if (apiPollVote.rep) pollVote.rep = SupportRepresentative.fromApiEntity(apiPollVote.rep);

    return pollVote;
  }
}

export default PollVote;

export type PollVoteType = {
  id: number,
  date: string;
  answer: PollAnswer;
  customer: Customer;
  rep: SupportRepresentative;
}

