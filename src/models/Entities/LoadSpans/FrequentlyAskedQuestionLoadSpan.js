//@flow
/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
import FrequentlyAskedQuestionTopicLoadSpan from './FrequentlyAskedQuestionTopicLoadSpan';

export class FrequentlyAskedQuestionLoadSpan {
  question: boolean;
  answer: boolean;
  dateCreated: boolean;
  availableToReps: boolean;
  availableToCustomers: boolean;
  position: boolean;
  userBrowser: boolean;
  userDevice: boolean;
  topic: FrequentlyAskedQuestionTopicLoadSpan;

  constructor(){
    this.question = false;
    this.answer = false;
    this.dateCreated = false;
    this.availableToReps = false;
    this.availableToCustomers = false;
    this.position = false;
    this.userBrowser = false;
    this.userDevice = false;
  }

  get topicLoadSpan(): FrequentlyAskedQuestionTopicLoadSpan {
    if(!this.topic){
		this.topic = new FrequentlyAskedQuestionTopicLoadSpan();
	}

    return this.topic;
  }

  loadAllProperties() {
    this.question = true;
    this.answer = true;
    this.dateCreated = true;
    this.availableToReps = true;
    this.availableToCustomers = true;
    this.position = true;
    this.userBrowser = true;
    this.userDevice = true;
  }
}

export default FrequentlyAskedQuestionLoadSpan;

/******************************************************************************
* THIS FILE IS GENERATED ANY CHANGES WILL BE LOST NEXT TIME CODE IS GENERATED *
******************************************************************************/
