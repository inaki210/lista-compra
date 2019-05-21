export interface Column<Row extends RowWithId> {
  name: string;
  title: () => React.ReactNode;
  content: (row: Row) => React.ReactNode;
}

export interface RowWithId {
  id: string;
}
