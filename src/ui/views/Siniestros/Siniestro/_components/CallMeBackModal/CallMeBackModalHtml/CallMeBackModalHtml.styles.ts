import { Link } from '$ui/components/Link';
import { styled } from '$ui/styles/styledComponents';

export { CallMeBackModalHtmlTelefono };

const CallMeBackModalHtmlTelefono = styled(Link)`
  font-size: ${p => p.theme.font.size.large}px;
  font-weight: ${p => p.theme.font.weight.semibold};
`;
