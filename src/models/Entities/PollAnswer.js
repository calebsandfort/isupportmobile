//@flow
import EntityBase from './entityBase';
import Poll from './Poll';

export class PollAnswer extends EntityBase {
  answer: string;
  poll: Poll;

  static fromApiEntity(apiPollAnswer:PollAnswerType): PollAnswer {
    let pollAnswer = new PollAnswer();
    pollAnswer.id = apiPollAnswer.id;
    pollAnswer.answer = apiPollAnswer.answer;
    if (apiPollAnswer.poll) pollAnswer.poll = Poll.fromApiEntity(apiPollAnswer.poll);

    return pollAnswer;
  }
}

export default PollAnswer;

export type PollAnswerType = {
  id: number,
  answer: string;
  poll: Poll;
}

