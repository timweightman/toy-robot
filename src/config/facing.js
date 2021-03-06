export default {
  NORTH: {
    MOVE: { x: 0, y: 1 },
    LEFT: 'WEST',
    RIGHT: 'EAST'
  },
  EAST: {
    MOVE: { x: 1, y: 0 },
    LEFT: 'NORTH',
    RIGHT: 'SOUTH'
  },
  SOUTH: {
    MOVE: { x: 0, y: -1 },
    LEFT: 'EAST',
    RIGHT: 'WEST'
  },
  WEST: {
    MOVE: { x: -1, y: 0 },
    LEFT: 'SOUTH',
    RIGHT: 'NORTH'
  }
};
