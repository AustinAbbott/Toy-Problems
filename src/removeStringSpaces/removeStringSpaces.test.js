const removeStringSpaces = require('./removeStringSpaces');

test('removes spaces from a given string', () => {
  expect(removeStringSpaces('a us  t in')).toBe('austin');
});

test('if no spaces, leaves the string as is', () => {
    expect(removeStringSpaces('hello')).toBe('hello');
  });