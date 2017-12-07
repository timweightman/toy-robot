const DEFAULT_ROW_COUNT = 5;
const DEFAULT_COLUMN_COUNT = 5;

export default () => {
  return {
    rows: DEFAULT_ROW_COUNT,
    columns: DEFAULT_COLUMN_COUNT,
    x: null,
    y: null,
    f: null
  };
};
