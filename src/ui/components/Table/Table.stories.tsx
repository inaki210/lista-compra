import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '$ui/.storybook/storiesOf';
import { Table } from './Table';
import { Column } from './Table.types';

storiesOf('Table', module)
  .add('default', () => <Table columns={columns} rows={rows} />)
  .add('onRowClick', () => (
    <Table columns={columns} rows={rows} onRowClick={action('onRowClick')} />
  ));

interface Row {
  id: string;
  titulo: string;
  valor: number;
}
const columns: Column<Row>[] = [
  { name: 'titulo', title: () => 'Título', content: row => row.titulo },
  { name: 'valor', title: () => 'Valor', content: row => row.valor },
];

const rows: Row[] = [
  { id: '1', titulo: 'row 1', valor: 1 },
  { id: '2', titulo: 'row 2', valor: 2 },
  { id: '3', titulo: 'row 3', valor: 3 },
  { id: '4', titulo: 'row 4', valor: 4 },
  { id: '5', titulo: 'row 5', valor: 5 },
];
