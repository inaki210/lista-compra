import { BottomProperty, ColorProperty } from 'csstype';

import { getImage } from '$ui/images';
import { css, styled } from '$ui/styles/styledComponents';
import { Trabajo } from '$ui/views/Siniestros/Siniestro/_components/Trabajo';
import { siniestroAsideItem } from '../SiniestroAside.styles';

export { AgendaWrapper, AgendaTitulo, AgendaTrabajos, AgendaTrabajo };

const rightCorner = (
  bottom: BottomProperty<string | 0>,
  color: ColorProperty,
) => css`
  content: ' ';
  position: absolute;
  right: 0;
  bottom: ${bottom};
  width: 0;
  height: 0;
  border-bottom: 20px solid ${color};
  border-left: 23px solid transparent;
`;

const AgendaWrapper = styled.button`
  ${siniestroAsideItem}

  position: relative;
  border: none;
  border-bottom: 1px solid ${p => p.theme.colors.beigeOscuro2};
  background-color: ${p => p.theme.colors.background};
  outline: none;
  text-align: inherit;

  ::before {
    ${p => rightCorner(0, p.theme.colors.beigeOscuro2)}
  }

  ::after {
    ${p => rightCorner('-1px', p.theme.colors.beigeClaro)}
  }
`;

const AgendaTitulo = styled.div`
  margin-bottom: ${p => p.theme.baseSpace.sm}px;
  color: ${p => p.theme.colors.magentaOscuro};
  font-size: ${p => p.theme.font.size.h3}px;
  font-weight: ${p => p.theme.font.weight.semibold};
  text-transform: uppercase;
`;

const agenda = getImage('agenda.svg');
const flechaContinuar = getImage('flecha-continuar.svg');

const AgendaTrabajos = styled.div`
  padding-right: 42px;
  background-image: url(${agenda}), url(${flechaContinuar});
  background-size: 24px 24px, 10px 15px;
  background-position: right 16px center, right center;
  background-repeat: no-repeat, no-repeat;
`;

const AgendaTrabajo = styled(Trabajo)`
  & + & {
    margin-top: ${p => p.theme.baseSpace.xsm}px;
  }
`;
