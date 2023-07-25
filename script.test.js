const { ship, ships } = require('./script');

describe('Sunking', () => {
  test('isSunk should return false', async () => {
    const result = await ship(2).isSunk();
    expect(result).toBe(false);
  });
});

describe('Hit', () => {
  test('hit should be equal to 1', async () => {
    const result = await ship(2).hit();
    expect(result).toBe(1);
  });
});

test('ships should return [0, 1]', async () => {
  const result = await ships(2, 'h', 0);
  expect(result).toEqual([0, 1]);
});

test('ships should return [3, 4, 5]', async () => {
  const result = await ships(3, 'h', 3);
  expect(result).toEqual([3, 4, 5]);
});

test('ships should return [0, 1]', async () => {
  const result = await ships(2, 'v', 0);
  expect(result).toEqual([0, 10]);
});