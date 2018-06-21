//@flow
import EntityBase from './entityBase';

export class DiscussionFeedIcon extends EntityBase {
  iconData: string;

  static fromApiEntity(apiDiscussionFeedIcon:DiscussionFeedIconType): DiscussionFeedIcon {
    let discussionFeedIcon = new DiscussionFeedIcon();
    discussionFeedIcon.id = apiDiscussionFeedIcon.id;
    discussionFeedIcon.iconData = apiDiscussionFeedIcon.iconData;

    return discussionFeedIcon;
  }
}

export default DiscussionFeedIcon;

export type DiscussionFeedIconType = {
  id: number,
  iconData: string;
}

