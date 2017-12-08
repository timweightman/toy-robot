import placeRobot from './placeRobot';

describe('placeRobot', () => {
  it('should place the robot when the x, y and f coordinates are valid', () => {
    expect(placeRobot({ rows: 5, columns: 5 }, 1, 1, 'NORTH')).toEqual({
      rows: 5,
      columns: 5,
      x: 1,
      y: 1,
      f: 'NORTH'
    });
  });

  it('should not place the robot when the x coordinate is invalid', () => {
    expect(placeRobot({ rows: 5, columns: 5 }, -1, 1, 'NORTH')).toEqual({
      rows: 5,
      columns: 5
    });
  });

  it('should not place the robot when the y coordinate is invalid', () => {
    expect(placeRobot({ rows: 5, columns: 5 }, 1, -1, 'NORTH')).toEqual({
      rows: 5,
      columns: 5
    });
  });

  it('should not place the robot when the f coordinate is invalid', () => {
    expect(placeRobot({ rows: 5, columns: 5 }, 1, 1, 'INVALID_FACING')).toEqual({
      rows: 5,
      columns: 5
    });
  });
});
