import placeRobot from './placeRobot';

describe('placeRobot', () => {
  describe('when new x value is inside table boundaries', () => {
    it('should update the x coordinates of the robot', () => {
      expect(placeRobot({ columns: 5 }, 3)).toEqual(
        expect.objectContaining({
          x: 3
        })
      );
    });
  });

  describe('when new x value is outside table boundaries', () => {
    it('should not update the x coordinates of the robot', () => {
      expect(placeRobot({ columns: 5, x: 3 }, 12)).toEqual(
        expect.objectContaining({
          x: 3
        })
      );
    });
  });

  describe('when new y value is inside table boundaries', () => {
    it('should update the y coordinates of the robot', () => {
      expect(placeRobot({ rows: 5 }, 0, 3)).toEqual(
        expect.objectContaining({
          y: 3
        })
      );
    });
  });

  describe('when new y value is outside table boundaries', () => {
    it('should not update the y coordinates of the robot', () => {
      expect(placeRobot({ rows: 5, y: 3 }, 0, 12)).toEqual(
        expect.objectContaining({
          y: 3
        })
      );
    });
  });
  
  describe('when new f value is a recognised facing', () => {
    it('should update the facing of the robot', () => {
      expect(placeRobot({ f: 'NORTH' }, 0, 0, 'SOUTH')).toEqual(
        expect.objectContaining({
          f: 'SOUTH'
        })
      );
    });
  });

  describe('when new f value is not a recognised facing', () => {
    it('should not update the facing of the robot', () => {
      expect(placeRobot({ f: 'NORTH' }, 0, 0, 'INVALID_FACING')).toEqual(
        expect.objectContaining({
          f: 'NORTH'
        })
      );
    });
  });
});
