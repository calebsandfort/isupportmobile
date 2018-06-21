//@flow
import EntityBase from './entityBase';

export class FrequentlyAskedQuestionTopic extends EntityBase {
  label: string;
  position: string;

  static fromApiEntity(apiFrequentlyAskedQuestionTopic:FrequentlyAskedQuestionTopicType): FrequentlyAskedQuestionTopic {
    let frequentlyAskedQuestionTopic = new FrequentlyAskedQuestionTopic();
    frequentlyAskedQuestionTopic.id = apiFrequentlyAskedQuestionTopic.id;
    frequentlyAskedQuestionTopic.label = apiFrequentlyAskedQuestionTopic.label;
    frequentlyAskedQuestionTopic.position = apiFrequentlyAskedQuestionTopic.position;

    return frequentlyAskedQuestionTopic;
  }
}

export default FrequentlyAskedQuestionTopic;

export type FrequentlyAskedQuestionTopicType = {
  id: number,
  label: string;
  position: string;
}

