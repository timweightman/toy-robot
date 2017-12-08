import facing from '../config/facing';
import isRobotPlaced from '../utils/isRobotPlaced';
import isValidPlacement from '../utils/isValidPlacement';

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
