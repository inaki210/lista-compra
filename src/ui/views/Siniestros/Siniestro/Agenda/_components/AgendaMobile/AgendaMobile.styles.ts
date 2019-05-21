import { SmallCalendar } from '$ui/components/SmallCalendar';
import { styled } from '$ui/styles/styledComponents';
import { DetalleSection } from '$ui/views/_components/DetalleSection';

export {
  AgendaMobileWrapper,
  AgendaMobileHeader,
  AgendaMobileCalendar,
  AgendaMobileTrabajos,
  AgendaMobileTrabajo,
  AgendaMobileAviso,
};

const AgendaMobileWrapper = styled(DetalleSection)`
  margin: ${p => p.theme.baseSpace.base}px 0;
`;

const AgendaMobileHeader = styled(DetalleSection.Header)`
  text-align: center;
`;

const AgendaMobileAviso = styled.div`
  margin-bottom: ${p => p.theme.baseSpace.sm}px;
`;

const AgendaMobileCalendar = styled(SmallCalendar)`
  margin: 0 auto ${p => p.theme.baseSpace.sm}px;
`;

const AgendaMobileTrabajos = styled.ul`
  margin-bottom: ${p => p.theme.baseSpace.sm}px;
  padding: ${p => p.theme.baseSpace.xxsm}px ${p => p.theme.baseSpace.sm}px;

  background-color: ${p => p.theme.colors.magentaClaro2};
`;

const AgendaMobileTrabajo = styled.li`
  padding: ${p => p.theme.baseSpace.xsm}px 0;

  & + & {
    border-top: 1px solid ${p => p.theme.colors.background};
  }
`;
