import facing from './facing.json';

const DEFAULT_ROW_COUNT = 5;
const DEFAULT_COLUMN_COUNT = 5;

export default () => {
  return {
    rows: DEFAULT_ROW_COUNT,
    columns: DEFAULT_COLUMN_COUNT,
    x: 0,
    y: 0,
    f: Object.keys(facing)[0]
  };
};
