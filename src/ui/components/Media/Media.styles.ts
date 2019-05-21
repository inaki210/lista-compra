import { Image as ImageComponent } from '$ui/components/Image';
import { styled } from '$ui/styles/styledComponents';

export { MediaWrapper, MediaImage, MediaContent };

const MediaWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  & > * + * {
    margin-left: 10px;
  }
`;

const MediaImage = styled(ImageComponent)`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
`;

const MediaContent = styled.div`
  flex-grow: 1;
`;
