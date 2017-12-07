const DEFAULT_ROW_COUNT = 5;
const DEFAULT_COLUMN_COUNT = 5;

export default () => {
  const table = [];

  for (let currentRow = 0; currentRow < DEFAULT_ROW_COUNT; currentRow++) {
    table.push(Array(DEFAULT_COLUMN_COUNT).fill(0));
  }

  return table;
};
