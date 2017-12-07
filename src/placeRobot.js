import facing from './facing.json';
import isValidPlacement from './isValidPlacement';

export default (table, x, y, f) => {
  if (isValidPlacement(table, x, y, f)) {
    return Object.assign({}, table, { x, y, f });
  }

  return table;
};
