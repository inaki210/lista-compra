import { Falsy } from './utils.types';

export { hasItems, hasNoItems };

function hasItems<Item>(items: Item[] | Falsy): items is Item[] {
  return Array.isArray(items) && items.length > 0;
}

function hasNoItems<Item>(items: Item[] | Falsy): items is Falsy | [] {
  return !Array.isArray(items) || items.length === 0;
}
