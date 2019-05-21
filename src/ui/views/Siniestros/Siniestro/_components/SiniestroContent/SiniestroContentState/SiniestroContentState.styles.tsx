import { styled, ThemedStyledProps } from '$ui/styles/styledComponents';
import { media } from '$ui/styles/utils/media';
import { SiniestroContentAction } from './SiniestroContentAction';

export {
  SiniestroContentStateWrapper,
  SiniestroContentStateItem,
  SiniestroContentStateLabel,
  SiniestroContentStateValue,
  SiniestroContentStateEstado,
  SiniestroContentStateActions,
  SiniestroContentStateAction,
};

const SiniestroContentStateWrapper = styled.ul`
  margin-top: ${p => p.theme.baseSpace.sm}px;
  padding: ${p => p.theme.baseSpace.xxsm}px;

  border: 1px solid ${p => p.theme.colors.grisClaro};

  ${media.tabletAndDesktop`
    display: flex;
    align-items: center;
  `}
`;

const itemHorizontalMargin = (p: ThemedStyledProps<{}>) =>
  `${p.theme.baseSpace.sm - p.theme.baseSpace.xxsm}px`;

const SiniestroContentStateItem = styled.li`
  ${media.onlyMobile`
    padding: ${p => p.theme.baseSpace.xxsm}px;
  `}
  ${media.tabletAndDesktop`
    padding: ${p => p.theme.baseSpace.sm}px ${itemHorizontalMargin};
  `}
`;

const SiniestroContentStateLabel = styled.span`
  font-weight: ${p => p.theme.font.weight.semibold};
`;

const SiniestroContentStateValue = styled.span`
  margin-left: ${p => p.theme.baseSpace.xxsm}px;
`;

const SiniestroContentStateEstado = styled(SiniestroContentStateValue)`
  color: ${p => p.theme.colors.verdeOscuro};
  text-transform: uppercase;
`;

const SiniestroContentStateActions = styled(SiniestroContentStateItem)`
  display: flex;

  ${media.onlyMobile`
    flex-wrap: wrap;
  `}

  ${media.tabletAndDesktop`
    flex-grow: 1;
    justify-content: flex-end;
  `}
`;

const SiniestroContentStateAction = styled(SiniestroContentAction)`
  ${media.onlyMobile`
    margin: ${itemHorizontalMargin};
  `}
  ${media.tabletAndDesktop`
    margin: 0 ${itemHorizontalMargin};
  `}
`;
