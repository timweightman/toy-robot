import startSimulation from './startSimulation';

describe('startSimulation', () => {
  it('should prompt for an instruction immediately', () => {
    const mockPrompt = jest.fn();
    startSimulation(mockPrompt);
    expect(mockPrompt).toHaveBeenCalled();
  });

  it('should prompt for another instruction after handling a command', () => {
    const mockPrompt = jest
      .fn()
      .mockImplementationOnce((prompt, callback) => callback('MOCK_COMMAND_TO_HANDLE'));

    startSimulation(mockPrompt);

    expect(mockPrompt.mock.calls.length).toEqual(2);
  });

  it('should support the `PLACE x,y,f` and `REPORT` commands', () => {
    const mockPrompt = jest
      .fn()
      .mockImplementationOnce((prompt, callback) => callback('PLACE 0,0,NORTH'))
      .mockImplementationOnce((prompt, callback) => callback('REPORT'));

    const mockOutputForReport = jest.fn();

    startSimulation(mockPrompt, mockOutputForReport);

    expect(mockOutputForReport).lastCalledWith('0,0,NORTH');
  });

  it('should support the `MOVE` command', () => {
    const mockPrompt = jest
      .fn()
      .mockImplementationOnce((prompt, callback) => callback('PLACE 0,0,EAST'))
      .mockImplementationOnce((prompt, callback) => callback('MOVE'))
      .mockImplementationOnce((prompt, callback) => callback('REPORT'));

    const mockOutputForReport = jest.fn();

    startSimulation(mockPrompt, mockOutputForReport);

    expect(mockOutputForReport).lastCalledWith('1,0,EAST');
  });

  it('should support the `LEFT` command', () => {
    const mockPrompt = jest
      .fn()
      .mockImplementationOnce((prompt, callback) => callback('PLACE 0,0,NORTH'))
      .mockImplementationOnce((prompt, callback) => callback('LEFT'))
      .mockImplementationOnce((prompt, callback) => callback('REPORT'));

    const mockOutputForReport = jest.fn();

    startSimulation(mockPrompt, mockOutputForReport);

    expect(mockOutputForReport).lastCalledWith('0,0,WEST');
  });

  it('should support the `RIGHT` command', () => {
    const mockPrompt = jest
      .fn()
      .mockImplementationOnce((prompt, callback) => callback('PLACE 0,0,NORTH'))
      .mockImplementationOnce((prompt, callback) => callback('RIGHT'))
      .mockImplementationOnce((prompt, callback) => callback('REPORT'));

    const mockOutputForReport = jest.fn();

    startSimulation(mockPrompt, mockOutputForReport);

    expect(mockOutputForReport).lastCalledWith('0,0,EAST');
  });
});
