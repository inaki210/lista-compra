import { Media } from '$ui/components/Media';
import { MediaListItem, MediaListWrapper } from './MediaList.styles';

export { MediaList };

const MediaList = Object.assign(MediaListWrapper, {
  Item: Object.assign(MediaListItem, {
    Image: Media.Image,
    Content: Media.Content,
  }),
});
