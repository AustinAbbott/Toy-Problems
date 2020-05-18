const removeStringSpaces = require('./removeStringSpaces');

test('removes spaces from a given string', () => {
  expect(removeStringSpaces('a us  t in')).toBe('austin');
  expect(removeStringSpaces('b ob')).toBe('bob');
  expect(removeStringSpaces('mary')).toBe('mary');
});