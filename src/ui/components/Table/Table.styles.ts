import { css, styled } from '$ui/styles/styledComponents';

export {
  TableWrapper,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
};

const TableWrapper = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

const TableHead = styled.thead``;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
  padding: 0 ${p => p.theme.baseSpace.sm}px;

  font-weight: ${p => p.theme.font.weight.semibold};
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableBodyCell = styled.td`
  padding: ${p => p.theme.baseSpace.sm}px;
`;

const TableBodyRow = styled.tr`
  ${p =>
    p.onClick &&
    css`
      cursor: pointer;

      :hover {
        background-color: ${p.theme.colors.beige};
      }
    `}

  & + & > ${TableBodyCell} {
    border-top: 1px solid ${p => p.theme.colors.beige};
  }
`;
