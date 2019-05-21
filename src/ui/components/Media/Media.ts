import { MediaContent, MediaImage, MediaWrapper } from './Media.styles';

export { Media };

const Media = Object.assign(MediaWrapper, {
  Image: MediaImage,
  Content: MediaContent,
});
