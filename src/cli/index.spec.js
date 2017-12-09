import stream from 'stream';
import main from './index';
import { write } from 'fs';

describe('CLI end-to-end smoke tests', () => {
  const CARRIAGE_RETURN = '\n';
  const ENV_OVERRIDE = null;
  const ENV_TEST = 'test';
  const getMockReadable = read => new stream.Readable({ read });
  const getMockWritable = write => new stream.Writable({ decodeStrings: false, write });

  it('should not execute automatically when env is `test`', () => {
    const failTest = jest.fn();

    main(ENV_TEST, getMockReadable(failTest), getMockWritable(failTest), jest.fn(), jest.fn());

    expect(failTest).not.toHaveBeenCalled();
  });

  it('should support PROBLEM.md Example a', done => {
    const writeOutput = [];
    const readable = getMockReadable(() => {});
    const writable = getMockWritable((data, encoding, callback) => {
      writeOutput.push(data);
      return data && callback();
    });

    main(ENV_OVERRIDE, readable, writable, jest.fn(), () => {
      expect(writeOutput).toContain('0,1,NORTH' + CARRIAGE_RETURN);
      done();
    });

    readable.push('PLACE 0,0,NORTH' + CARRIAGE_RETURN);
    readable.push('MOVE' + CARRIAGE_RETURN);
    readable.push('REPORT' + CARRIAGE_RETURN);
    readable.push('exit' + CARRIAGE_RETURN);
  });

  it('should support PROBLEM.md Example b', done => {
    const writeOutput = [];
    const readable = getMockReadable(() => {});
    const writable = getMockWritable((data, encoding, callback) => {
      writeOutput.push(data);
      return data && callback();
    });

    main(ENV_OVERRIDE, readable, writable, jest.fn(), () => {
      expect(writeOutput).toContain('0,0,WEST' + CARRIAGE_RETURN);
      done();
    });

    readable.push('PLACE 0,0,NORTH' + CARRIAGE_RETURN);
    readable.push('LEFT' + CARRIAGE_RETURN);
    readable.push('REPORT' + CARRIAGE_RETURN);
    readable.push('exit' + CARRIAGE_RETURN);
  });

  it('should support PROBLEM.md Example c', done => {
    const writeOutput = [];
    const readable = getMockReadable(() => {});
    const writable = getMockWritable((data, encoding, callback) => {
      writeOutput.push(data);
      return data && callback();
    });

    main(ENV_OVERRIDE, readable, writable, jest.fn(), () => {
      expect(writeOutput).toContain('3,3,NORTH' + CARRIAGE_RETURN);
      done();
    });

    readable.push('PLACE 1,2,EAST' + CARRIAGE_RETURN);
    readable.push('MOVE' + CARRIAGE_RETURN);
    readable.push('MOVE' + CARRIAGE_RETURN);
    readable.push('LEFT' + CARRIAGE_RETURN);
    readable.push('MOVE' + CARRIAGE_RETURN);
    readable.push('REPORT' + CARRIAGE_RETURN);
    readable.push('exit' + CARRIAGE_RETURN);
  });
});
