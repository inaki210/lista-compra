import React, { useMemo } from 'react';

import { ReactComponent } from '$core/infraestructure/utils/react';
import { TableBodyCell, TableBodyRow } from './Table.styles';
import { Column, RowWithId } from './Table.types';

export { TableRow };

interface Props<Row extends RowWithId> {
  columns: Column<Row>[];
  row: Row;
  onClick?: (row: Row) => void;
  BodyRow: ReactComponent<typeof TableBodyRow>;
  BodyCell: ReactComponent<typeof TableBodyCell>;
}

function TableRow<Row extends RowWithId>({
  columns,
  row,
  onClick,
  BodyRow,
  BodyCell,
}: Props<Row>) {
  const handleClick = useMemo(createHandleClick, [row, onClick]);

  return (
    <BodyRow onClick={handleClick}>
      {columns.map(column => (
        <BodyCell key={column.name}>{column.content(row)}</BodyCell>
      ))}
    </BodyRow>
  );

  function createHandleClick() {
    return onClick && (() => onClick(row));
  }
}
