import { Image } from '$ui/components/Image';
import { styled } from '$ui/styles/styledComponents';

export { ContactoItemWrapper, ContactoItemImage, ContactoItemDetail };

const ContactoItemWrapper = styled.div`
  display: flex;
`;

const ContactoItemImage = styled(Image)`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-right: ${p => p.theme.baseSpace.xxsm}px;
`;

const ContactoItemDetail = styled.div`
  display: flex;
  flex-direction: column;

  font-weight: ${p => p.theme.font.weight.semibold};

  overflow: hidden;
`;
