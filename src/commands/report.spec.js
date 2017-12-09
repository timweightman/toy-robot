import report from './report';

describe('report', () => {
  it('should return a report in the format x,y,f', () => {
    expect(report({ rows: 5, columns: 5, x: 1, y: 2, f: 'SOUTH' })).toEqual('1,2,SOUTH');
  });

  it('should ignore the command if the robot has not been placed', () => {
    expect(report({ rows: 5, columns: 5 })).toEqual(undefined);
  });

  it('should ignore the command if the robot has an invalid placement', () => {
    expect(report({ rows: 5, columns: 5, x: 1, y: -2, f: 'SOUTH' })).toEqual(undefined);
  });

  describe('when default text is supplied', () => {
    it('should return a report in the format x,y,f', () => {
      expect(report({ rows: 5, columns: 5, x: 1, y: 2, f: 'SOUTH' }, 'TEST_NOT_PRINTED')).toEqual(
        '1,2,SOUTH'
      );
    });

    it('should ignore the command if the robot has not been placed', () => {
      expect(report({ rows: 5, columns: 5 }, 'TEST_DEFAULT_TEXT')).toEqual('TEST_DEFAULT_TEXT');
    });

    it('should ignore the command if the robot has an invalid placement', () => {
      expect(report({ rows: 5, columns: 5, x: 1, y: -2, f: 'SOUTH' }, 'TEST_DEFAULT_TEXT')).toEqual(
        'TEST_DEFAULT_TEXT'
      );
    });
  });
});
