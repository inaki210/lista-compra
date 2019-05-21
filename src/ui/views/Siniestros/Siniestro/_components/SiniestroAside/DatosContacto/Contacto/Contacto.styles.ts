import { Link } from '$ui/components/Link';
import { styled } from '$ui/styles/styledComponents';
import { ContactoItem as ContactoItemComponent } from './ContactoItem';

export { ContactoWrapper, ContactoItem, ContactoLink };

const ContactoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactoItem = styled(ContactoItemComponent)`
  margin-top: ${p => p.theme.baseSpace.xsm}px;
`;

const ContactoLink = styled(Link)`
  text-overflow: ellipsis;

  overflow: hidden;
`;
