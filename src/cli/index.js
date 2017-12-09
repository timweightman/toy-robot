import cliClear from 'cli-clear';
import readline from 'readline';
import startSimulation from './startSimulation';

const main = (env, readable, writable, clear, exit) => {
  if (env === 'test') return;

  clear();

  const rl = readline.createInterface({
    input: readable,
    output: writable
  });

  startSimulation(
    (prompt, callback) => rl.question(prompt, callback),
    output => writable.write(`${output}\n`),
    exitCode => {
      rl.close();
      clear();
      exit(exitCode || 0);
    }
  );
};

export default main;

main(process.env.NODE_ENV, process.stdin, process.stdout, cliClear, process.exit);
