import { Table } from '$ui/components/Table';
import { getImage } from '$ui/images';
import { styled } from '$ui/styles/styledComponents';

export { FacturasTableBodyCell };

const download = getImage('descarga.svg');

const FacturasTableBodyCell = styled(Table.BodyCell)`
  :first-child {
    padding-left: ${p => p.theme.baseSpace.sm + 25}px;

    background-image: url(${download});
    background-size: 19px 24px;
    background-position: ${p => p.theme.baseSpace.sm}px center;
    background-repeat: no-repeat;
  }
`;
