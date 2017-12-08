import facing from '../config/facing';

export default (table, x, y, f) => {
  const isValidX = x >= 0 && x < table.columns;
  const isValidY = y >= 0 && y < table.rows;
  const isValidFacing = !!facing[f];

  return isValidX && isValidY && isValidFacing;
};
