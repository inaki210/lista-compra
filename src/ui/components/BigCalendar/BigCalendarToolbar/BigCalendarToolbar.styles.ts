import { Image } from '$ui/components/Image';
import { styled } from '$ui/styles/styledComponents';

export {
  BigCalendarToolbarWrapper,
  BigCalendarToolbarLink,
  BigCalendarToolbarLinkImage,
  BigCalendarToolbarTitle,
};

const BigCalendarToolbarWrapper = styled.div`
  margin-bottom: ${p => p.theme.baseSpace.base}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigCalendarToolbarLink = styled.button`
  border: none;
  background-color: ${p => p.theme.colors.background};
  width: 24px;
  height: 24px;
  padding: 5px 7.5px;

  :disabled {
    visibility: hidden;
  }
`;

const BigCalendarToolbarLinkImage = styled(Image)`
  width: 9px;
  height: 14px;
`;

const BigCalendarToolbarTitle = styled.span`
  margin: 0 ${p => p.theme.baseSpace.sm}px;
  color: ${p => p.theme.colors.berenjena};
  font-size: ${p => p.theme.font.size.h3}px;
  font-weight: ${p => p.theme.font.weight.semibold};
`;
