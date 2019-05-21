import { Modal } from '$ui/components/Modal';
import { Section } from '$ui/components/Section';
import { styled } from '$ui/styles/styledComponents';

export { ModalBody, Header };

const ModalBody = styled(Modal.Body)`
  background-color: ${p => p.theme.colors.beige};
`;

const Header = styled(Section.Header)`
  margin-bottom: ${p => p.theme.baseSpace.base}px;
`;
