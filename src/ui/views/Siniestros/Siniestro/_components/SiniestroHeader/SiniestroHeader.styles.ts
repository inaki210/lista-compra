import { styled } from '$ui/styles/styledComponents';

export { SiniestroHeaderWrapper, SiniestroHeaderTitle, SiniestroHeaderActions };

const SiniestroHeaderWrapper = styled.div`
  display: flex;
`;

const SiniestroHeaderTitle = styled.div`
  flex-grow: 1;
`;

const SiniestroHeaderActions = styled.div`
  flex-shrink: 0;

  font-size: ${p => p.theme.font.size.xxsmall}px;
`;
