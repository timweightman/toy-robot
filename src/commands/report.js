import isRobotPlaced from '../utils/isRobotPlaced';
import isValidPlacement from '../utils/isValidPlacement';

export default table => (isRobotPlaced(table) ? [table.x, table.y, table.f].join(',') : undefined);
