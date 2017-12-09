import turnRobot from './turnRobot';

describe('turnRobot', () => {
  it('should turn the robot to the right of its current facing', () => {
    expect(turnRobot({ rows: 5, columns: 5, x: 1, y: 1, f: 'NORTH' }, 'RIGHT')).toEqual(
      expect.objectContaining({
        f: 'EAST'
      })
    );
  });

  it('should turn the robot to the left of its current facing', () => {
    expect(turnRobot({ rows: 5, columns: 5, x: 1, y: 1, f: 'NORTH' }, 'LEFT')).toEqual(
      expect.objectContaining({
        f: 'WEST'
      })
    );
  });

  it('should ignore the command if the direction is not valid', () => {
    expect(turnRobot({ rows: 5, columns: 5, x: 1, y: 1, f: 'NORTH' }, 'INVALID')).toEqual({
      rows: 5,
      columns: 5,
      x: 1,
      y: 1,
      f: 'NORTH'
    });
  });

  it('should ignore the command if the robot has not been placed', () => {
    expect(turnRobot({ rows: 5, columns: 5 }, 'RIGHT')).toEqual({ rows: 5, columns: 5 });
  });

  it('should ignore the command if the robot has an invalid placement', () => {
    expect(turnRobot({ rows: 5, columns: 5, x: -1, y: 1, f: 'NORTH' }, 'RIGHT')).toEqual({
      rows: 5,
      columns: 5,
      x: -1,
      y: 1,
      f: 'NORTH'
    });
  });
});
