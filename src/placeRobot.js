import facing from './facing.json';

export default (table, x, y, f) => {
  return Object.assign({}, table, {
    x: x < table.columns ? x : table.x,
    y: y < table.rows ? y : table.y,
    f: facing[f] ? f : table.f
  });
};
