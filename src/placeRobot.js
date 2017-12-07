import facings from './facings.json';

export default (table, x, y, f) => {
  return Object.assign({}, table, {
    x: x < table.columns ? x : table.x,
    y: y < table.rows ? y : table.y,
    f: facings[f] ? f : table.f
  });
};
