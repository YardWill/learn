const { sum } = require('../dist/index');

test('sum', () => {
  expect(sum(1, 2)).toBe(3);
});

