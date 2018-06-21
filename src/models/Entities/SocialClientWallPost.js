//@flow
import EntityBase from './entityBase';
import Customer from './Customer';
import SupportRepresentative from './SupportRepresentative';
import KnowledgeEntry from './KnowledgeEntry';
import RepNewsFeedOptions from './RepNewsFeedOptions';
import Poll from './Poll';

export class SocialClientWallPost extends EntityBase {
  message: string;
  createdDate: string;
  removed: string;
  likes: string;
  dislikes: string;
  customerLikeIdentifiersString: string;
  customerDislikeIdentifiersString: string;
  allowReplies: string;
  pinned: string;
  pinExpiry: string;
  customFieldValue: string;
  position: string;
  customer: Customer;
  rep: SupportRepresentative;
  parentPost: SocialClientWallPost;
  knowledgeEntry: KnowledgeEntry;
  repNewsFeedOptions: RepNewsFeedOptions;
  poll: Poll;

  static fromApiEntity(apiSocialClientWallPost:SocialClientWallPostType): SocialClientWallPost {
    let socialClientWallPost = new SocialClientWallPost();
    socialClientWallPost.id = apiSocialClientWallPost.id;
    socialClientWallPost.message = apiSocialClientWallPost.message;
    socialClientWallPost.createdDate = apiSocialClientWallPost.createdDate;
    socialClientWallPost.removed = apiSocialClientWallPost.removed;
    socialClientWallPost.likes = apiSocialClientWallPost.likes;
    socialClientWallPost.dislikes = apiSocialClientWallPost.dislikes;
    socialClientWallPost.customerLikeIdentifiersString = apiSocialClientWallPost.customerLikeIdentifiersString;
    socialClientWallPost.customerDislikeIdentifiersString = apiSocialClientWallPost.customerDislikeIdentifiersString;
    socialClientWallPost.allowReplies = apiSocialClientWallPost.allowReplies;
    socialClientWallPost.pinned = apiSocialClientWallPost.pinned;
    socialClientWallPost.pinExpiry = apiSocialClientWallPost.pinExpiry;
    socialClientWallPost.customFieldValue = apiSocialClientWallPost.customFieldValue;
    socialClientWallPost.position = apiSocialClientWallPost.position;
    if (apiSocialClientWallPost.customer) socialClientWallPost.customer = Customer.fromApiEntity(apiSocialClientWallPost.customer);
    if (apiSocialClientWallPost.rep) socialClientWallPost.rep = SupportRepresentative.fromApiEntity(apiSocialClientWallPost.rep);
    if (apiSocialClientWallPost.parentPost) socialClientWallPost.parentPost = SocialClientWallPost.fromApiEntity(apiSocialClientWallPost.parentPost);
    if (apiSocialClientWallPost.knowledgeEntry) socialClientWallPost.knowledgeEntry = KnowledgeEntry.fromApiEntity(apiSocialClientWallPost.knowledgeEntry);
    if (apiSocialClientWallPost.repNewsFeedOptions) socialClientWallPost.repNewsFeedOptions = RepNewsFeedOptions.fromApiEntity(apiSocialClientWallPost.repNewsFeedOptions);
    if (apiSocialClientWallPost.poll) socialClientWallPost.poll = Poll.fromApiEntity(apiSocialClientWallPost.poll);

    return socialClientWallPost;
  }
}

export default SocialClientWallPost;

export type SocialClientWallPostType = {
  id: number,
  message: string;
  createdDate: string;
  removed: string;
  likes: string;
  dislikes: string;
  customerLikeIdentifiersString: string;
  customerDislikeIdentifiersString: string;
  allowReplies: string;
  pinned: string;
  pinExpiry: string;
  customFieldValue: string;
  position: string;
  customer: Customer;
  rep: SupportRepresentative;
  parentPost: SocialClientWallPost;
  knowledgeEntry: KnowledgeEntry;
  repNewsFeedOptions: RepNewsFeedOptions;
  poll: Poll;
}

