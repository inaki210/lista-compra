import React from 'react';

import {
  DetalleListItem,
  DetalleListItemName,
  DetalleListWrapper,
} from './DetalleList.styles';

export { DetalleList };

interface Props {
  children: React.ReactNode;
}

function DetalleList({ children }: Props) {
  return <DetalleListWrapper>{children}</DetalleListWrapper>;
}

interface ItemProps {
  name: React.ReactNode;
  content: React.ReactNode;
}

DetalleList.Item = function({ name, content }: ItemProps) {
  return (
    <DetalleListItem>
      <DetalleListItemName>{name}:</DetalleListItemName> {content}
    </DetalleListItem>
  );
};
