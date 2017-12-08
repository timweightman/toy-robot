import facing from './config/facing';
import isRobotPlaced from './isRobotPlaced';
import isValidPlacement from './isValidPlacement';

export default table => {
  const currentFacing = facing[table.f];

  if (isRobotPlaced(table) && currentFacing) {
    const x = table.x + currentFacing.MOVE.x;
    const y = table.y + currentFacing.MOVE.y;

    if (isValidPlacement(table, x, y, table.f)) {
      return Object.assign({}, table, { x, y });
    }
  }

  return table;
};
