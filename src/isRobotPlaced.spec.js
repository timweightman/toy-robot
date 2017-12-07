import isRobotPlaced from './isRobotPlaced';

describe('isRobotPlaced', () => {
  it('should return true when the table has valid robot placement', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, x: 1, y: 1, f: 'NORTH' })).toBe(true);
  });

  it('should return false when the table has no x, y, or f coordinates', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5 })).toBe(false);
  });

  it('should return false when the table has no f coordinate', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, x: 1, y: 1 })).toBe(false);
  });

  it('should return false when the table has invalid f coordinate', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, x: 1, y: 1, f: 'INVALID_FACING' })).toBe(false);
  });
  
  it('should return false when the table has no x coordinate', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, y: 1, f: 'NORTH' })).toBe(false);
  });

  it('should return false when the table has invalid x coordinate', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, x: -1, y: 1, f: 'NORTH' })).toBe(false);
  });
  
  it('should return false when the table has no y coordinate', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, x: 1, f: 'NORTH' })).toBe(false);
  });

  it('should return false when the table has invalid y coordinate', () => {
    expect(isRobotPlaced({ rows: 5, columns: 5, x: 1, y: -1, f: 'NORTH' })).toBe(false);
  });
});
