import { Media } from '$ui/components/Media';
import { styled } from '$ui/styles/styledComponents';

export { MediaListWrapper, MediaListItem };

const MediaListWrapper = styled.ul``;

const MediaListItem = styled(Media).attrs({ as: 'li' })`
  align-items: center;

  & + & {
    margin-top: ${p => p.theme.baseSpace.base}px;
  }
`;
