import { styled } from '$ui/styles/styledComponents';
import { siniestroAsideItem } from '../../SiniestroAside.styles';
import { Contacto } from '../Contacto';

export { GrupoContactosWrapper, GrupoContactosTitle, GrupoContactosContacto };

const GrupoContactosWrapper = styled.div`
  ${siniestroAsideItem}

  background-color: ${p => p.theme.colors.beige};
`;

const GrupoContactosTitle = styled.div`
  margin-bottom: ${p => p.theme.baseSpace.sm}px;

  color: ${p => p.theme.colors.magentaOscuro};
  font-size: ${p => p.theme.font.size.large}px;
  font-weight: ${p => p.theme.font.weight.semibold};
`;

const GrupoContactosContacto = styled(Contacto)`
  & + & {
    margin-top: ${p => p.theme.baseSpace.xsm}px;
    padding-top: ${p => p.theme.baseSpace.xsm}px;

    border-top: 1px solid ${p => p.theme.colors.beigeOscuro2};
  }
`;
