import createTable from './createTable';

describe('createTable', () => {
  it('should create a default 5x5 table for the toy robot simulation', () => {
    expect(createTable()).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });
});
