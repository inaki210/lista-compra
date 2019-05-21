import { Image } from '$ui/components/Image';
import { styled } from '$ui/styles/styledComponents';

export { SiniestroContentActionContainer, SiniestroContentActionImage };

const SiniestroContentActionContainer = styled.a`
  display: inline-flex;
  align-items: center;

  color: ${p => p.theme.colors.magenta};
  font-weight: ${p => p.theme.font.weight.semibold};
`;

const SiniestroContentActionImage = styled(Image)`
  margin-right: ${p => p.theme.baseSpace.xxsm}px;
`;
