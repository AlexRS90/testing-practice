const capitalize = require('./capitalize');

test('Return first letter as capital', () => {
  expect(capFirst('hello')).toBe('Hello');
});