const stringIncrementor = require('./stringIncrementor');


test('If no digits in string, add `1` to end', () => {
    expect(stringIncrementor('foo')).toBe('foo1');
  });
  
  test('Increment digit by one', () => {
    expect(stringIncrementor('foobar23')).toBe('foobar24');
  });

  test('Increment digit by one', () => {
    expect(stringIncrementor('foo0042')).toBe('foo0043');
  });

  test('Increment digit by one', () => {
    expect(stringIncrementor('foo9')).toBe('foo10');
  });

  test('Increment digit by one', () => {
    expect(stringIncrementor('foo099')).toBe('foo100');
  });