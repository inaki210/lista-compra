import { Paragraph } from '$ui/components/Paragraph';
import { styled } from '$ui/styles/styledComponents';
import { siniestroAsideItem } from '../SiniestroAside.styles';

export { TeLlamamosWrapper, TeLlamamosHorario };

const TeLlamamosWrapper = styled.div`
  ${siniestroAsideItem}

  background-color: ${p => p.theme.colors.background};
`;

const TeLlamamosHorario = styled(Paragraph)`
  color: ${p => p.theme.colors.gris};
`;
