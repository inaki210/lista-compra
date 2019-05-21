import React from 'react';

import { ReactComponent } from '$core/infraestructure/utils/react';
import {
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
} from './Table.styles';
import { Column, RowWithId } from './Table.types';
import { TableRow } from './TableRow.';

export { Table };

Table.Wrapper = TableWrapper;
Table.Head = TableHead;
Table.HeadRow = TableHeadRow;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.BodyRow = TableBodyRow;
Table.BodyCell = TableBodyCell;

interface Props<Row extends RowWithId> {
  columns: Column<Row>[];
  rows: Row[];
  onRowClick?: (row: Row) => void;
  Wrapper?: ReactComponent<typeof TableWrapper>;
  Head?: ReactComponent<typeof TableHead>;
  HeadRow?: ReactComponent<typeof TableHeadRow>;
  HeadCell?: ReactComponent<typeof TableHeadCell>;
  Body?: ReactComponent<typeof TableBody>;
  BodyRow?: ReactComponent<typeof TableBodyRow>;
  BodyCell?: ReactComponent<typeof TableBodyCell>;
}

function Table<Row extends RowWithId>({
  columns,
  rows,
  onRowClick,
  Wrapper = TableWrapper,
  Head = TableHead,
  HeadRow = TableHeadRow,
  HeadCell = TableHeadCell,
  Body = TableBody,
  BodyRow = TableBodyRow,
  BodyCell = TableBodyCell,
}: Props<Row>) {
  return (
    <Wrapper>
      <Head>
        <HeadRow>
          {columns.map(column => (
            <HeadCell key={column.name}>{column.title()}</HeadCell>
          ))}
        </HeadRow>
      </Head>
      <Body>
        {rows.map(row => (
          <TableRow
            key={row.id}
            columns={columns}
            row={row}
            onClick={onRowClick}
            BodyRow={BodyRow}
            BodyCell={BodyCell}
          />
        ))}
      </Body>
    </Wrapper>
  );
}
