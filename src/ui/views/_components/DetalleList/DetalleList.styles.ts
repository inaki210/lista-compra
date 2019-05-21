import { styled } from '$ui/styles/styledComponents';

export { DetalleListWrapper, DetalleListItem, DetalleListItemName };

const DetalleListWrapper = styled.ul``;

const DetalleListItem = styled.li`
  & + & {
    margin-top: ${p => p.theme.baseSpace.xxsm}px;
  }
`;

const DetalleListItemName = styled.span`
  color: ${p => p.theme.colors.magentaOscuro};
  font-weight: ${p => p.theme.font.weight.semibold};
`;
