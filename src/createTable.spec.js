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

  it('should default x,y coordinates to origin 0,0', () => {
    expect(createTable()).toEqual(
      expect.objectContaining({
        x: 0,
        y: 0
      })
    );
  });
});
