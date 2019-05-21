import { styled } from '$ui/styles/styledComponents';
import { DetalleSection } from '$ui/views/_components/DetalleSection';

export { AgendaDesktopWrapper, AgendaDesktopHeader, AgendaDesktopAviso };

const AgendaDesktopWrapper = styled(DetalleSection)`
  margin-bottom: ${p => p.theme.baseSpace.xlg}px;
`;

const AgendaDesktopHeader = DetalleSection.Header;

const AgendaDesktopAviso = styled.div`
  margin-bottom: ${p => p.theme.baseSpace.md}px;
`;
