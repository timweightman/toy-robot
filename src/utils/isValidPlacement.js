import facing from '../config/facing';

export default (table, x, y, f) => {
  const parsedX = parseInt(x, 10);
  const parsedY = parseInt(y, 10);
  const isValidX = parsedX >= 0 && parsedX < table.columns;
  const isValidY = parsedY >= 0 && parsedY < table.rows;
  const isValidFacing = !!facing[f];

  return isValidX && isValidY && isValidFacing;
};
