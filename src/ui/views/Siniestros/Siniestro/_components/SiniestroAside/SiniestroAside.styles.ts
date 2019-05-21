import { css, styled, ThemedStyledProps } from '$ui/styles/styledComponents';

export { SiniestroAsideWrapper, siniestroAsideItem };

const asideMargin = (p: ThemedStyledProps<{}>) => p.theme.baseSpace.base * 0.75;

const SiniestroAsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.baseSpace.base}px ${asideMargin}px;

  background-color: ${p => p.theme.colors.beigeClaro};
`;

const siniestroAsideItem = css`
  margin-top: ${p => p.theme.baseSpace.base}px;
  padding: ${p => p.theme.baseSpace.sm}px ${asideMargin}px;

  :first-child {
    margin-top: 0;
  }
`;
