import { css, styled } from '$ui/styles/styledComponents';

export { TrabajoWrapper, TrabajoTitle, TrabajoDescripcion };

interface TrabajoProps {
  finalizado?: boolean;
}

const TrabajoWrapper = styled.div<TrabajoProps>`
  ${p =>
    p.finalizado &&
    css`
      color: ${p => p.theme.colors.magentaClaro};
    `}
`;

const TrabajoTitle = styled.div<TrabajoProps>`
  color: ${p =>
    p.finalizado ? p.theme.colors.magentaClaro : p.theme.colors.magenta};
  font-weight: ${p => p.theme.font.weight.semibold};
`;

const TrabajoDescripcion = styled.div`
  margin-top: ${p => p.theme.baseSpace.xxsm}px;
  padding-left: 9px;

  ::before {
    content: ' ';

    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 2px 3px 2px -9px;

    background-color: ${p => p.theme.colors.magentaClaro};
    border-radius: 50%;
  }
`;
