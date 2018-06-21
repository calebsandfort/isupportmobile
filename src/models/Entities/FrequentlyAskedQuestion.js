//@flow
import EntityBase from './entityBase';
import FrequentlyAskedQuestionTopic from './FrequentlyAskedQuestionTopic';

export class FrequentlyAskedQuestion extends EntityBase {
  question: string;
  answer: string;
  dateCreated: string;
  availableToReps: string;
  availableToCustomers: string;
  position: string;
  userBrowser: string;
  userDevice: string;
  topic: FrequentlyAskedQuestionTopic;

  static fromApiEntity(apiFrequentlyAskedQuestion:FrequentlyAskedQuestionType): FrequentlyAskedQuestion {
    let frequentlyAskedQuestion = new FrequentlyAskedQuestion();
    frequentlyAskedQuestion.id = apiFrequentlyAskedQuestion.id;
    frequentlyAskedQuestion.question = apiFrequentlyAskedQuestion.question;
    frequentlyAskedQuestion.answer = apiFrequentlyAskedQuestion.answer;
    frequentlyAskedQuestion.dateCreated = apiFrequentlyAskedQuestion.dateCreated;
    frequentlyAskedQuestion.availableToReps = apiFrequentlyAskedQuestion.availableToReps;
    frequentlyAskedQuestion.availableToCustomers = apiFrequentlyAskedQuestion.availableToCustomers;
    frequentlyAskedQuestion.position = apiFrequentlyAskedQuestion.position;
    frequentlyAskedQuestion.userBrowser = apiFrequentlyAskedQuestion.userBrowser;
    frequentlyAskedQuestion.userDevice = apiFrequentlyAskedQuestion.userDevice;
    if (apiFrequentlyAskedQuestion.topic) frequentlyAskedQuestion.topic = FrequentlyAskedQuestionTopic.fromApiEntity(apiFrequentlyAskedQuestion.topic);

    return frequentlyAskedQuestion;
  }
}

export default FrequentlyAskedQuestion;

export type FrequentlyAskedQuestionType = {
  id: number,
  question: string;
  answer: string;
  dateCreated: string;
  availableToReps: string;
  availableToCustomers: string;
  position: string;
  userBrowser: string;
  userDevice: string;
  topic: FrequentlyAskedQuestionTopic;
}

