import { styled } from '$ui/styles/styledComponents';
import { siniestroAsideItem } from '../SiniestroAside.styles';

export { DatosContactoTitle };

const DatosContactoTitle = styled.div`
  ${siniestroAsideItem}

  padding: 0;

  color: ${p => p.theme.colors.magentaOscuro};
  font-size: ${p => p.theme.font.size.large}px;
  font-weight: ${p => p.theme.font.weight.semibold};
  text-transform: uppercase;
  text-align: center;
`;
