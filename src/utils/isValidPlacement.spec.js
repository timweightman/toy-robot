import isValidPlacement from './isValidPlacement';

describe('isValidPlacement', () => {
  it('should return true when x and y are within the table bounds, and f is a known facing', () => {
    expect(isValidPlacement({ rows: 5, columns: 5 }, 1, 1, 'NORTH')).toBe(true);
  });

  it('should return false if x is below the table bounds', () => {
    expect(isValidPlacement({ rows: 5, columns: 5 }, -1, 1, 'NORTH')).toBe(false);
  });

  it('should return false if y is below the table bounds', () => {
    expect(isValidPlacement({ rows: 5, columns: 5 }, 1, -1, 'NORTH')).toBe(false);
  });

  it('should return false if x is above the table bounds', () => {
    expect(isValidPlacement({ rows: 5, columns: 5 }, 5, 1, 'NORTH')).toBe(false);
  });

  it('should return false if y is above the table bounds', () => {
    expect(isValidPlacement({ rows: 5, columns: 5 }, 1, 5, 'NORTH')).toBe(false);
  });

  it('should return false if f is not a known facing value', () => {
    expect(isValidPlacement({ rows: 5, columns: 5 }, 1, 1, 'INVALID_FACING')).toBe(false);
  });
});
