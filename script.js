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

const ships = (length, direction, location) => {
  const shipsArr = [];
  if (direction === 'h') {
    for (let i = 0; i < length; i++) {
      shipsArr.push(location + i);
    }
  } else if (direction === 'v') {
    for (let i = 0; i < length t* 10; i += 10) {
      shipsArr.push(location + i);
    }
  }
  return shipsArr;
};

module.exports = { ship, ships };
