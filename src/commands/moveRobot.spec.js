import moveRobot from './moveRobot';

describe('moveRobot', () => {
  it('should move the robot one step in its current facing direction', () => {
    expect(moveRobot({ rows: 5, columns: 5, x: 0, y: 0, f: 'NORTH' })).toEqual(
      expect.objectContaining({
        y: 1
      })
    );
  });

  it('should not move when that would cause the robot to fall off the table', () => {
    expect(moveRobot({ rows: 5, columns: 5, x: 0, y: 4, f: 'NORTH' })).toEqual(
      expect.objectContaining({
        y: 4
      })
    );
  });

  it('should ignore the command if the robot has not been placed', () => {
    expect(moveRobot({ rows: 5, columns: 5 })).toEqual({ rows: 5, columns: 5 });
  });

  it('should ignore the command if the robot has an invalid placement', () => {
    expect(moveRobot({ rows: 5, columns: 5, x: -1, y: 1, f: 'NORTH' })).toEqual({
      rows: 5,
      columns: 5,
      x: -1,
      y: 1,
      f: 'NORTH'
    });
  });
});
