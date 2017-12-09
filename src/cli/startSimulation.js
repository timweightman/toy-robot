import createTable from '../commands/createTable';
import place from '../commands/placeRobot';
import move from '../commands/moveRobot';
import turn from '../commands/turnRobot';
import report from '../commands/report';

const PROMPT_STRING = '<< ';
const EXITS = ['x', 'q', 'exit', 'quit'];

export default (promptForInstruction, output, endSimulation) => {
  let table = createTable();

  const commands = {
    PLACE: (x, y, f) => (table = place(table, parseInt(x, 10), parseInt(y, 10), f)),
    MOVE: () => (table = move(table)),
    LEFT: () => (table = turn(table, 'LEFT')),
    RIGHT: () => (table = turn(table, 'RIGHT')),
    REPORT: () => output(report(table, ''))
  };

  const handleCommand = instruction => {
    const [command, ...params] = instruction.split(' ');

    if (EXITS.includes(command)) {
      endSimulation();
      return;
    }

    const currentCommand = commands[command];
    if (currentCommand) {
      currentCommand.apply(null, ...params.map(p => p.split(',')));
    }

    promptForInstruction(PROMPT_STRING, handleCommand);
  };

  promptForInstruction(PROMPT_STRING, handleCommand);
};
