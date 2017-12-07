import createTable from './createTable';

describe('createTable', () => {
  it('should create a default 5x5 table for the toy robot simulation', () => {
    expect(createTable()).toEqual(
      expect.objectContaining({
        columns: 5,
        rows: 5
      })
    );
  });

  it('should not place the robot on the table by default', () => {
    expect(createTable()).toEqual(
      expect.objectContaining({
        x: null,
        y: null,
        f: null
      })
    );
  });
});
