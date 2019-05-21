import { Link } from '$ui/components/Link';
import { getImage } from '$ui/images';
import { styled } from '$ui/styles/styledComponents';

export { BackLinkLink };

const flecha = getImage('flecha-volver.svg');

const BackLinkLink = styled(Link)`
  padding-left: 10px;

  text-decoration: none;

  background: url(${flecha}) no-repeat left center;
  background-size: 8.5px 13px;
`;
