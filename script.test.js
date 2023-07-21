const ship = require('./script');

describe('Sunking', () => {
  test('isSunk should return false', async () => {
    const result = await ship(2).isSunk();
    expect(result).toBe(false);
  });
});

describe('hit', () => {
  test('hit should be equal to 1', async () => {
    const result = await ship(2).hit();
    expect(result).toBe(1);
  });
});
