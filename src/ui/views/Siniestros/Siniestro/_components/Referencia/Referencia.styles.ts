import { styled } from '$ui/styles/styledComponents';

export { ReferenciaLabel, ReferenciaValue };

const ReferenciaLabel = styled.span`
  margin-right: ${p => p.theme.baseSpace.xxsm}px;

  color: ${p => p.theme.colors.magentaOscuro};
  font-weight: ${p => p.theme.font.weight.semibold};
`;

const ReferenciaValue = styled.span`
  margin-right: ${p => p.theme.baseSpace.sm + p.theme.baseSpace.xsm}px;

  font-size: ${p => p.theme.font.size.h3}px;
`;
