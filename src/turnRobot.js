import facing from './facing';
import isRobotPlaced from './isRobotPlaced';
import isValidPlacement from './isValidPlacement';

export default (table, direction) => {
  const currentFacing = facing[table.f];

  if (isRobotPlaced(table) && currentFacing) {
    const f = currentFacing[direction];

    if (isValidPlacement(table, table.x, table.y, f)) {
      return Object.assign({}, table, { f });
    }
  }

  return table;
};
