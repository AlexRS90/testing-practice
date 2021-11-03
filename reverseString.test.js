const reverseString = require('./reverseString');

it ('Return reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test ('Empty String', () => {
  expect(() => reverseString('')).toThrow(Error);
});