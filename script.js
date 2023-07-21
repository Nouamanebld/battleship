const ship = (length) => {
  this.length = length;
  let hits = 0;
  const hit = () => ++hits;
  const isSunk = () => {
    if (this.length === hits) {
      return true;
    }
    return false;
  };
  return { length, hits, hit, isSunk };
};

module.exports = ship;
